import { useAtomValue } from "jotai";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ApiError } from "../../api/todos";
import { todoAtomFamily } from "../_atoms/todos";
import { useShowToast } from "./useToast";

export const useTodo = (id: string) => {
	const query = useAtomValue(todoAtomFamily(id));
	const showToast = useShowToast();
	const router = useRouter();

	useEffect(() => {
		if (!query.error) {
			return;
		}

		if (query.error instanceof ApiError && query.error.status === 404) {
			showToast("TODOが見つかりませんでした。", "error");
			void router.replace("/");

			return;
		}

		showToast("TODOの取得に失敗しました。", "error");
	}, [query.error, router, showToast]);

	return query;
};
