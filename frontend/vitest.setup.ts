import "@testing-library/jest-dom/vitest";
import { server } from "./src/test/server";

beforeAll(() => {
	server.listen({ onUnhandledRequest: "error" });

	// アプリは "/api/todos" のように相対パスで fetch するが、Node の fetch は絶対 URL しか受け付けない
	const fetchWithMsw = globalThis.fetch;

	globalThis.fetch = (input, init) =>
		fetchWithMsw(
			typeof input === "string" && input.startsWith("/")
				? new URL(input, location.origin)
				: input,
			init
		);
});

afterEach(() => {
	server.resetHandlers();
});

afterAll(() => {
	server.close();
});
