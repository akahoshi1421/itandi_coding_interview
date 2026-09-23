import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { todosAtom } from "../_atoms/todos";
import { useShowToast } from "./useToast";

export const useTodos = () => {
	const query = useAtomValue(todosAtom);
	const showToast = useShowToast();

	useEffect(() => {
		if (query.error) {
			showToast("TODOの取得に失敗しました。", "error");
		}
	}, [query.error, showToast]);

	return query;
};
