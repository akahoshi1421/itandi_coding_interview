import { useAtomValue } from "jotai";
import { todoAtomFor } from "../_atoms/todos";

export const useTodo = (id: string) => useAtomValue(todoAtomFor(id));
