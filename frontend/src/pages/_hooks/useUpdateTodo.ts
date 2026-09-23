import { useAtomValue } from "jotai";
import type { UpdateTODO } from "../../types";
import { updateTodoAtom } from "../_atoms/todos";
import { useShowToast } from "./useToast";

export const useUpdateTodo = () => {
	const { mutateAsync } = useAtomValue(updateTodoAtom);
	const showToast = useShowToast();

	return (id: string, todo: UpdateTODO) =>
		mutateAsync(
			{ id, todo },
			{
				onError: () => {
					showToast("更新に失敗しました。", "error");
				},
				onSuccess: () => {
					showToast("更新しました。", "success");
				}
			}
		);
};
