import { getDefaultStore } from "jotai";
import { queryClientAtom } from "jotai-tanstack-query";
import type { TODO } from "../types";

export const makeTodo = (overrides: Partial<TODO> = {}): TODO => ({
	completed: false,
	content: "内容",
	createdAt: "2026/09/01",
	deadline: "2026/09/30",
	id: "todo-1",
	priority: 5,
	title: "タイトル",
	updatedAt: "2026/09/01",
	...overrides
});

// jotai の default store と react-query のキャッシュはテストをまたいで残るので、モジュールごと作り直す
export const resetAppState = () => {
	const queryClient = getDefaultStore().get(queryClientAtom);

	queryClient.clear();
	queryClient.setDefaultOptions({ queries: { retry: false } });
	vi.resetModules();
};
