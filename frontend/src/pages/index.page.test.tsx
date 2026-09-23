import { act, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HttpResponse, http } from "msw";
import { makeTodo, resetAppState } from "../test/helpers";
import { server } from "../test/server";

vi.mock("next/router", () => ({
	useRouter: () => ({
		push: vi.fn((url: string) => Promise.resolve(url.length > 0)),
		query: {}
	})
}));

const renderTop = async () => {
	const { default: App } = await import("./_app.page");
	const { default: Page } = await import("./index.page");

	await act(async () => {
		render(<App Component={Page} pageProps={{}} router={{} as never} />);
		await Promise.resolve();
	});
};

const column = async (name: string) =>
	(await screen.findByText(name)).parentElement!;

const grouped = {
	done: [
		makeTodo({ completed: true, id: "d1", priority: 0, title: "済んだ仕事" })
	],
	high: [makeTodo({ id: "h1", priority: 9.5, title: "急ぎの仕事" })],
	low: [makeTodo({ id: "l1", priority: 2, title: "後回しの仕事" })],
	middle: [makeTodo({ id: "m1", priority: 5, title: "普通の仕事" })]
};

beforeEach(() => {
	resetAppState();
	server.use(http.get("/api/todos", () => HttpResponse.json(grouped)));
});

describe("トップページ", () => {
	it("TODOが優先度ごとの列に表示される", async () => {
		// Arrange
		// (beforeEach の一覧をそのまま使う)

		// Act
		await renderTop();

		// Assert
		expect(
			within(await column("高")).getByText("急ぎの仕事")
		).toBeInTheDocument();
		expect(
			within(await column("中")).getByText("普通の仕事")
		).toBeInTheDocument();
		expect(
			within(await column("低")).getByText("後回しの仕事")
		).toBeInTheDocument();
		expect(
			within(await column("完了")).getByText("済んだ仕事")
		).toBeInTheDocument();
	});

	it("TODOが1件もない列には「TODOタスクはありません。」と表示される", async () => {
		// Arrange
		server.use(
			http.get("/api/todos", () => HttpResponse.json({ ...grouped, low: [] }))
		);

		// Act
		await renderTop();

		// Assert
		expect(
			within(await column("低")).getByText("TODOタスクはありません。")
		).toBeInTheDocument();
	});

	it("取得に失敗すると失敗した旨が表示される", async () => {
		// Arrange
		server.use(http.get("/api/todos", () => HttpResponse.error()));

		// Act
		await renderTop();

		// Assert
		expect(
			(await screen.findAllByText("TODOの取得に失敗しました。")).length
		).toBeGreaterThan(0);
	});

	it("タイトルと期日を入れずに登録すると、入力必須の案内が出て登録されない", async () => {
		// Arrange
		const posted: unknown[] = [];

		server.use(
			http.post("/api/todos", async ({ request }) => {
				posted.push(await request.json());

				return HttpResponse.json(makeTodo(), { status: 201 });
			})
		);
		await renderTop();

		// Act
		await userEvent.click(screen.getByRole("button", { name: "登録" }));

		// Assert
		expect(screen.getByText("タイトルは入力必須です。")).toBeInTheDocument();
		expect(screen.getByText("期日は入力必須です。")).toBeInTheDocument();
		expect(posted).toEqual([]);
	});

	it("入力して登録すると、新しいTODOが一覧に追加され、登録した旨が表示される", async () => {
		// Arrange
		const posted: unknown[] = [];
		const created = makeTodo({
			deadline: "2026/10/01",
			id: "new-1",
			priority: 8,
			title: "新しい仕事"
		});

		server.use(
			http.post("/api/todos", async ({ request }) => {
				posted.push(await request.json());

				return HttpResponse.json(created, { status: 201 });
			})
		);
		await renderTop();

		// Act
		await userEvent.type(screen.getByLabelText("タイトル:"), "新しい仕事");
		await userEvent.type(screen.getByLabelText("内容:"), "内容");
		await userEvent.type(screen.getByLabelText("期日:"), "2026-10-01");
		await userEvent.click(screen.getByRole("button", { name: "登録" }));

		// Assert
		expect(posted).toEqual([
			{ content: "内容", deadline: "2026/10/01", title: "新しい仕事" }
		]);
		expect(
			await within(await column("高")).findByText("新しい仕事")
		).toBeInTheDocument();
		expect(screen.getByText("登録しました。")).toBeInTheDocument();
		expect(screen.getByLabelText("タイトル:")).toHaveValue("");
	});

	it("チェックを付けると、そのTODOが完了の列に移る", async () => {
		// Arrange
		const target = grouped.high[0];
		const patched: unknown[] = [];

		server.use(
			http.patch(`/api/todos/${target.id}`, async ({ request }) => {
				patched.push(await request.json());

				return HttpResponse.json({ ...target, completed: true, priority: 0 });
			})
		);
		await renderTop();
		const highColumn = await column("高");

		// Act
		await userEvent.click(within(highColumn).getByRole("checkbox"));

		// Assert
		expect(patched).toEqual([{ completed: true }]);
		expect(
			await within(await column("完了")).findByText("急ぎの仕事")
		).toBeInTheDocument();
		expect(
			within(highColumn).queryByText("急ぎの仕事")
		).not.toBeInTheDocument();
		expect(screen.getByText("更新しました。")).toBeInTheDocument();
	});
});
