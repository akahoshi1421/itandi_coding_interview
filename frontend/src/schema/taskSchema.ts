import z from "zod";

export const taskSchema = z.object({
	content: z.string(),
	deadline: z.date({ error: "期日は入力必須です。" }),
	title: z.string().min(1, { error: "タイトルは入力必須です。" })
});
