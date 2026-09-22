import { format } from "date-fns";
import type { NextApiRequest, NextApiResponse } from "next";
import type { DateString, UpdateTODO } from "../../../../types";
import { db } from "../../../../utils";
import { evaluatePriority } from "../../../../utils/score";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		const todos = await db.get();
		const index = todos.findIndex(({ id }) => id === req.query.id);

		if (index === -1) {
			res.status(404).end();
		} else {
			res.status(200).json(todos[index]);
		}
	} else if (req.method === "PATCH") {
		const todos = await db.get();
		const index = todos.findIndex(({ id }) => id === req.query.id);

		if (index === -1) {
			res.status(404).end();
		} else {
			const { completed, content, deadline, title } = req.body as UpdateTODO;
			const todo = todos[index];
			const next = {
				...todo,
				completed: completed ?? todo.completed,
				content: content ?? todo.content,
				deadline: deadline ?? todo.deadline,
				title: title ?? todo.title,
				updatedAt: format(new Date(), "yyyy/MM/dd") as DateString
			};
			// 完了なら 0、内容が変わったときだけ Jev で再評価
			const changed =
				next.content !== todo.content ||
				next.deadline !== todo.deadline ||
				next.title !== todo.title;
			const priority = next.completed
				? 0
				: changed || todo.completed
					? await evaluatePriority(next)
					: todo.priority;

			const nextTodos = todos.with(index, { ...next, priority });

			res.status(200).json(await db.save(nextTodos));
		}
	} else if (req.method === "DELETE") {
		const todos = await db.get();
		const index = todos.findIndex(({ id }) => id === req.query.id);

		if (index === -1) {
			res.status(404).end();
		} else {
			await db.save(todos.toSpliced(index, 1));

			res.status(204).end();
		}
	} else {
		res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
		res.status(405).end();
	}
}
