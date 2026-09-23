import { useAtomValue } from "jotai";
import { useRouter } from "next/router";
import { deleteTodoAtom } from "../_atoms/todos";
import { useShowToast } from "./useToast";

export const useDeleteTodo = () => {
	const { isPending, mutateAsync } = useAtomValue(deleteTodoAtom);
	const showToast = useShowToast();
	const router = useRouter();

	const deleteTodo = async (id: string) => {
		await mutateAsync(id, {
			onError: () => {
				showToast("削除に失敗しました。", "error");
			},
			onSuccess: () => {
				showToast("削除しました。", "success");
			}
		});
		await router.push("/");
	};

	return { deleteTodo, isDeleting: isPending };
};
