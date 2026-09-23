import { useAtomValue, useSetAtom } from "jotai";
import { useCallback } from "react";
import type { ToastState } from "../_atoms/toast";
import { toastAtom } from "../_atoms/toast";

const TOAST_DURATION_MS = 3000;

export const useToast = () => useAtomValue(toastAtom);

export const useShowToast = () => {
	const setToast = useSetAtom(toastAtom);

	// useEffect の依存に入れても再実行の引き金にならないよう、同じ関数を返す
	return useCallback(
		(message: string, state: ToastState["state"]) => {
			const id = Date.now();

			setToast({ id, message, state });
			setTimeout(() => {
				setToast((prev) => (prev?.id === id ? null : prev));
			}, TOAST_DURATION_MS);
		},
		[setToast]
	);
};
