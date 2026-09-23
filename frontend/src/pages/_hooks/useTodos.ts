import { useAtomValue } from "jotai";
import { todosAtom } from "../_atoms/todos";

export const useTodos = () => useAtomValue(todosAtom);
