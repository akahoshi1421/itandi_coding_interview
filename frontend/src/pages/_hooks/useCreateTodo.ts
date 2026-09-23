import { useAtomValue } from "jotai";
import type { NewTODO } from "../../types";
import { createTodoAtom } from "../_atoms/todos";
import { useShowToast } from "./useToast";

export const useCreateTodo = () => {
	const { isPending, mutate } = useAtomValue(createTodoAtom);
	const showToast = useShowToast();

	const createTodo = (todo: NewTODO, onSuccess?: () => void) => {
		mutate(todo, {
			onError: () => {
				showToast("登録に失敗しました。", "error");
			},
			onSuccess: () => {
				showToast("登録しました。", "success");
				onSuccess?.();
			}
		});
	};

	return { createTodo, isCreating: isPending };
};
