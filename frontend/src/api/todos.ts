import type { GroupedTODO, NewTODO, TODO, UpdateTODO } from "../types";

const request = async <T>(
	path: string,
	method: "GET" | "POST" | "PATCH" | "DELETE" = "GET",
	body?: NewTODO | UpdateTODO
): Promise<T> => {
	const res = await fetch(`/api/todos${path}`, {
		body: body ? JSON.stringify(body) : undefined,
		headers: { "content-type": "application/json" },
		method
	});

	if (!res.ok) {
		throw new Error(`${method} /api/todos${path} -> ${res.status}`);
	}

	return res.status === 204 ? (undefined as T) : ((await res.json()) as T);
};

export const todosApi = {
	create: (todo: NewTODO) => request<TODO>("", "POST", todo),
	get: (id: string) => request<TODO>(`/${id}`),
	list: () => request<GroupedTODO>(""),
	remove: (id: string) => request<undefined>(`/${id}`, "DELETE"),
	update: (id: string, todo: UpdateTODO) =>
		request<TODO[]>(`/${id}`, "PATCH", todo)
};
