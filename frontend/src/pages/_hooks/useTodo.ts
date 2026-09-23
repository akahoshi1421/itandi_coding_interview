import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { todoAtomFamily } from "../_atoms/todos";
import { useShowToast } from "./useToast";

export const useTodo = (id: string) => {
	const query = useAtomValue(todoAtomFamily(id));
	const showToast = useShowToast();

	useEffect(() => {
		if (query.error) {
			showToast("TODOの取得に失敗しました。", "error");
		}
	}, [query.error, showToast]);

	return query;
};
