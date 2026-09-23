import { useAtomValue } from "jotai";
import { createTodoAtom } from "../_atoms/todos";
import { useShowToast } from "./useToast";

export const useCreateTodo = () => {
	const { mutateAsync } = useAtomValue(createTodoAtom);
	const showToast = useShowToast();

	return (...args: Parameters<typeof mutateAsync>) =>
		mutateAsync(args[0], {
			onError: () => {
				showToast("登録に失敗しました。", "error");
			},
			onSuccess: () => {
				showToast("登録しました。", "success");
			}
		});
};
