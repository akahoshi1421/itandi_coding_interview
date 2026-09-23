import { useAtomValue } from "jotai";
import { useRouter } from "next/router";
import { deleteTodoAtom } from "../_atoms/todos";
import { useShowToast } from "./useToast";

export const useDeleteTodo = () => {
	const { isPending, mutate } = useAtomValue(deleteTodoAtom);
	const showToast = useShowToast();
	const router = useRouter();

	const deleteTodo = (id: string) => {
		mutate(id, {
			onError: () => {
				showToast("削除に失敗しました。", "error");
			},
			onSuccess: () => {
				showToast("削除しました。", "success");
				void router.push("/");
			}
		});
	};

	return { deleteTodo, isDeleting: isPending };
};
