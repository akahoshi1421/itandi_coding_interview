import { atom, getDefaultStore } from "jotai";
import { atomFamily } from "jotai-family";
import { atomWithMutation, atomWithQuery } from "jotai-tanstack-query";
import { todosApi } from "../../api/todos";
import type { TODO, UpdateTODO } from "../../types";
import { groupTodos } from "../../utils/groupTodos";

export const TODOS_QUERY_KEY = ["todos"] as const;

const todosQueryAtom = atomWithQuery(() => ({
	queryFn: todosApi.list,
	queryKey: TODOS_QUERY_KEY
}));

// 成功したら戻り値の1件を表示用 atom に反映する(一覧の再取得はしない)
// atomWithMutation の onSuccess からは set が使えないので、Provider なしで使っている default store に直接書く
const upsertTodo = (todo: TODO) => {
	getDefaultStore().set(todosAtom, todo);
};

// 詳細ページ用: id ごとの1件取得
export const todoAtomFamily = atomFamily((id: string) =>
	atomWithQuery(() => ({
		queryFn: () => todosApi.get(id),
		queryKey: [...TODOS_QUERY_KEY, id]
	}))
);

export const createTodoAtom = atomWithMutation(() => ({
	mutationFn: todosApi.create,
	onSuccess: upsertTodo
}));

export const updateTodoAtom = atomWithMutation(() => ({
	mutationFn: ({ id, todo }: { id: string; todo: UpdateTODO }) =>
		todosApi.update(id, todo),
	onSuccess: upsertTodo
}));

// POST / PATCH の戻り値を id で持つ。表示時にクエリ結果へ上書き・追加する
const localTodosAtom = atom<Record<string, TODO>>({});

// 表示用: クエリの結果にローカルの更新分を反映したもの。書き込みで1件を追加・更新する
export const todosAtom = atom(
	(get) => {
		const query = get(todosQueryAtom);
		const local = get(localTodosAtom);

		if (!query.data || Object.keys(local).length === 0) {
			return query;
		}

		const fetched = Object.values(query.data)
			.flat()
			.map((todo) => local[todo.id] ?? todo);
		const fetchedIds = new Set(fetched.map(({ id }) => id));
		const added = Object.values(local).filter(({ id }) => !fetchedIds.has(id));

		return { ...query, data: groupTodos(fetched.concat(added)) };
	},
	(_get, set, todo: TODO) => {
		set(localTodosAtom, (prev) => ({ ...prev, [todo.id]: todo }));
	}
);
