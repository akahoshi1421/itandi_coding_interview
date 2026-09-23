import { useAtomValue } from "jotai";
import { todoAtomFamily } from "../_atoms/todos";

export const useTodo = (id: string) => useAtomValue(todoAtomFamily(id));
