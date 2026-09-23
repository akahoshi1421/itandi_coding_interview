import { useAtomValue } from "jotai";
import { createTodoAtom } from "../_atoms/todos";

// POST する。表示への反映は createTodoAtom の onSuccess が行う
export const useCreateTodo = () => useAtomValue(createTodoAtom).mutateAsync;
