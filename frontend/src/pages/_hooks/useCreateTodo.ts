import { useAtomValue, useSetAtom } from "jotai";
import { createTodoAtom, todosAtom } from "../_atoms/todos";

// POST し、返ってきた新項目を表示用 atom に追加する(一覧の再取得はしない)
export const useCreateTodo = () => {
	const { mutateAsync } = useAtomValue(createTodoAtom);
	const addTodo = useSetAtom(todosAtom);

	return async (...args: Parameters<typeof mutateAsync>) => {
		const todo = await mutateAsync(...args);

		addTodo(todo);

		return todo;
	};
};
