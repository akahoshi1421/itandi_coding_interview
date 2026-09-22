import type { GroupedTODO, TODO } from "../types";

// 完了 / 高(7.0〜) / 中(4.0〜6.9) / 低(〜3.9)に分け、各グループ内は priority の降順
export const groupTodos = (todos: TODO[]): GroupedTODO => {
	const sorted = todos.toSorted((a, b) => b.priority - a.priority);

	return {
		done: sorted.filter((t) => t.completed),
		high: sorted.filter((t) => !t.completed && t.priority >= 7),
		low: sorted.filter((t) => !t.completed && t.priority < 4),
		middle: sorted.filter(
			(t) => !t.completed && t.priority >= 4 && t.priority < 7
		)
	};
};
