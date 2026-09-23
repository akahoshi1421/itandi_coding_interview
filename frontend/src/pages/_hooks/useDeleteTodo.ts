import { useAtomValue } from "jotai";
import { useRouter } from "next/router";
import { deleteTodoAtom } from "../_atoms/todos";

// DELETE してトップへ戻る。表示からの除外は deleteTodoAtom の onSuccess が行う
export const useDeleteTodo = () => {
	const { isPending, mutateAsync } = useAtomValue(deleteTodoAtom);
	const router = useRouter();

	const deleteTodo = async (id: string) => {
		await mutateAsync(id);
		await router.push("/");
	};

	return { deleteTodo, isDeleting: isPending };
};
