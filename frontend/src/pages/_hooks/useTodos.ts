import { useQuery } from "@tanstack/react-query";
import { todosApi } from "../../api/todos";

export const TODOS_QUERY_KEY = ["todos"] as const;

export const useTodos = () =>
	useQuery({ queryFn: todosApi.list, queryKey: TODOS_QUERY_KEY });
