import { atom } from "jotai";
import { atomWithMutation, atomWithQuery } from "jotai-tanstack-query";
import { todosApi } from "../../api/todos";
import type { TODO } from "../../types";
import { groupTodos } from "../../utils/groupTodos";

export const TODOS_QUERY_KEY = ["todos"] as const;

const todosQueryAtom = atomWithQuery(() => ({
	queryFn: todosApi.list,
	queryKey: TODOS_QUERY_KEY
}));

export const createTodoAtom = atomWithMutation(() => ({
	mutationFn: todosApi.create
}));

// POST で増えた分。サーバーからの再取得に含まれたものは表示時に除外する
const addedTodosAtom = atom<TODO[]>([]);

// 表示用: クエリの結果に、登録済みの新項目を足したもの。書き込みで新項目を追加する
export const todosAtom = atom(
	(get) => {
		const query = get(todosQueryAtom);
		const added = get(addedTodosAtom);

		if (!query.data || added.length === 0) {
			return query;
		}

		const fetched = Object.values(query.data).flat();
		const fetchedIds = new Set(fetched.map(({ id }) => id));

		return {
			...query,
			data: groupTodos(
				fetched.concat(added.filter(({ id }) => !fetchedIds.has(id)))
			)
		};
	},
	(_get, set, todo: TODO) => {
		set(addedTodosAtom, (prev) => prev.concat(todo));
	}
);
