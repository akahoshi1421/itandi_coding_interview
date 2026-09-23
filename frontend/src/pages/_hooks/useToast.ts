import { useAtomValue, useSetAtom } from "jotai";
import type { ToastState } from "../_atoms/toast";
import { toastAtom } from "../_atoms/toast";

const TOAST_DURATION_MS = 3000;

export const useToast = () => useAtomValue(toastAtom);

export const useShowToast = () => {
	const setToast = useSetAtom(toastAtom);

	return (message: string, state: ToastState["state"]) => {
		const id = Date.now();

		setToast({ id, message, state });
		setTimeout(() => {
			// 後から別のトーストが出ていたらそちらを残す
			setToast((prev) => (prev?.id === id ? null : prev));
		}, TOAST_DURATION_MS);
	};
};
