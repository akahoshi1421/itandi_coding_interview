import { useAtomValue } from "jotai";
import type { UpdateTODO } from "../../types";
import { updateTodoAtom } from "../_atoms/todos";
import { useShowToast } from "./useToast";

export const useUpdateTodo = () => {
	const { isPending, mutate } = useAtomValue(updateTodoAtom);
	const showToast = useShowToast();

	const updateTodo = (id: string, todo: UpdateTODO, onSuccess?: () => void) => {
		mutate(
			{ id, todo },
			{
				onError: () => {
					showToast("更新に失敗しました。", "error");
				},
				onSuccess: () => {
					showToast("更新しました。", "success");
					onSuccess?.();
				}
			}
		);
	};

	return { isUpdating: isPending, updateTodo };
};
