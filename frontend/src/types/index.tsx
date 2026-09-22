export type DateString = `${string}/${string}/${string}`;

export type TODO = {
	completed: boolean;
	content: string;
	createdAt: DateString;
	deadline: DateString;
	id: string;
	priority: number;
	title: string;
	updatedAt: DateString;
};

export type NewTODO = {
	content: string;
	deadline: DateString;
	title: string;
};

export type UpdateTODO = {
	completed?: boolean;
	content?: string;
	deadline?: DateString;
	title?: string;
};

export type GroupedTODO = Record<"high" | "middle" | "low" | "done", TODO[]>;
