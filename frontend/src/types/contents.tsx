export type Content = {
	completed: boolean;
	content: string;
	id: string;
	priority: number;
	title: string;
};

export type Contents = {
	high: Content[];
	low: Content[];
	middle: Content[];
};
