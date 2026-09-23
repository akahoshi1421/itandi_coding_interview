import { useAtomValue } from "jotai";
import { deleteTodoAtom } from "../_atoms/todos";

// DELETE する。表示からの除外は deleteTodoAtom の onSuccess が行う
export const useDeleteTodo = () => {
	const { isPending, mutateAsync } = useAtomValue(deleteTodoAtom);

	return { deleteTodo: mutateAsync, isDeleting: isPending };
};
