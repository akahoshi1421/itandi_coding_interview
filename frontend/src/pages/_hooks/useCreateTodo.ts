import { useMutation } from "@tanstack/react-query";
import { todosApi } from "../../api/todos";

export const useCreateTodo = () => useMutation({ mutationFn: todosApi.create });
