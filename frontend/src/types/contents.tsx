import type { DateString } from ".";

export type Content = {
	completed: boolean;
	content: string;
	createdAt: DateString;
	deadline: DateString;
	id: string;
	priority: number;
	title: string;
	updatedAt: DateString;
};

export type Contents = {
	high: Content[];
	low: Content[];
	middle: Content[];
};
