import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HttpResponse, http } from "msw";
import { makeTodo, resetAppState } from "../../../test/helpers";
import { server } from "../../../test/server";

const push = vi.fn((url: string) => Promise.resolve(url.length > 0));

vi.mock("next/router", () => ({
	useRouter: () => ({ push, query: { id: "todo-1" } })
}));

const todo = makeTodo({
	content: "元の内容",
	deadline: "2026/09/30",
	id: "todo-1",
	priority: 6.5,
	title: "元のタイトル"
});

const renderDetail = async () => {
	const { default: App } = await import("../../_app.page");
	const { default: Page } = await import("./index.page");

	await act(async () => {
		render(<App Component={Page} pageProps={{}} router={{} as never} />);
		await Promise.resolve();
	});
	await screen.findByDisplayValue("元のタイトル");
};

beforeEach(() => {
	resetAppState();
	push.mockClear();
	server.use(http.get("/api/todos/todo-1", () => HttpResponse.json(todo)));
});

describe("TODO詳細ページ", () => {
	it("開くと、登録済みの内容が入力欄に入った状態で表示される", async () => {
		// Arrange
		// (beforeEach の1件をそのまま使う)

		// Act
		await renderDetail();

		// Assert
		expect(screen.getByDisplayValue("元のタイトル")).toBeInTheDocument();
		expect(screen.getByDisplayValue("元の内容")).toBeInTheDocument();
		expect(screen.getByDisplayValue("2026-09-30")).toBeInTheDocument();
		expect(screen.getByText("6.5")).toBeInTheDocument();
	});

	it("タイトルを空にして変更すると、入力必須の案内が出て更新されない", async () => {
		// Arrange
		const patched: unknown[] = [];

		server.use(
			http.patch("/api/todos/todo-1", async ({ request }) => {
				patched.push(await request.json());

				return HttpResponse.json(todo);
			})
		);
		await renderDetail();

		// Act
		await userEvent.clear(screen.getByDisplayValue("元のタイトル"));
		await userEvent.click(screen.getByRole("button", { name: "変更" }));

		// Assert
		expect(screen.getByText("タイトルは入力必須です。")).toBeInTheDocument();
		expect(patched).toEqual([]);
		expect(push).not.toHaveBeenCalled();
	});

	it("内容を書き換えて変更すると、更新した旨が出てトップページに戻る", async () => {
		// Arrange
		const patched: unknown[] = [];

		server.use(
			http.patch("/api/todos/todo-1", async ({ request }) => {
				patched.push(await request.json());

				return HttpResponse.json({ ...todo, title: "新しいタイトル" });
			})
		);
		await renderDetail();

		// Act
		const title = screen.getByDisplayValue("元のタイトル");
		await userEvent.clear(title);
		await userEvent.type(title, "新しいタイトル");
		await userEvent.click(screen.getByRole("button", { name: "変更" }));

		// Assert
		expect(patched).toEqual([
			{ content: "元の内容", deadline: "2026/09/30", title: "新しいタイトル" }
		]);
		expect(await screen.findByText("更新しました。")).toBeInTheDocument();
		expect(push).toHaveBeenCalledWith("/");
	});

	it("削除を押すと、削除した旨が出てトップページに戻る", async () => {
		// Arrange
		let deleted = 0;

		server.use(
			http.delete("/api/todos/todo-1", () => {
				deleted += 1;

				return new HttpResponse(null, { status: 204 });
			})
		);
		await renderDetail();

		// Act
		await userEvent.click(screen.getByRole("button", { name: "削除" }));

		// Assert
		expect(deleted).toBe(1);
		expect(await screen.findByText("削除しました。")).toBeInTheDocument();
		expect(push).toHaveBeenCalledWith("/");
	});

	it("削除に失敗すると、失敗した旨が出てページに留まる", async () => {
		// Arrange
		server.use(
			http.delete(
				"/api/todos/todo-1",
				() => new HttpResponse(null, { status: 500 })
			)
		);
		await renderDetail();

		// Act
		await userEvent.click(screen.getByRole("button", { name: "削除" }));

		// Assert
		expect(await screen.findByText("削除に失敗しました。")).toBeInTheDocument();
		expect(push).not.toHaveBeenCalled();
	});
});
