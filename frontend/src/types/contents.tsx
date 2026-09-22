export type Content = {
	completed: boolean;
	content: string;
	createdAt: string;
	deadline: string;
	id: string;
	priority: number;
	title: string;
	updatedAt: string;
};

export type Contents = {
	high: Content[];
	low: Content[];
	middle: Content[];
};
