import { useAtomValue } from "jotai";
import type { UpdateTODO } from "../../types";
import { updateTodoAtom } from "../_atoms/todos";

// PATCH する。表示への反映は updateTodoAtom の onSuccess が行う
export const useUpdateTodo = () => {
	const { mutateAsync } = useAtomValue(updateTodoAtom);

	return (id: string, todo: UpdateTODO) => mutateAsync({ id, todo });
};
