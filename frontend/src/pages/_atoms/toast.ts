import { atom } from "jotai";

export type ToastState = {
	id: number;
	message: string;
	state: "success" | "error";
};

export const toastAtom = atom<ToastState | null>(null);
