import crypto from "node:crypto";
import { format } from "date-fns";
import type { NextApiRequest, NextApiResponse } from "next";
import type { DateString, GroupedTODO, NewTODO, TODO } from "../../../types";
import { db } from "../../../utils";
import { groupTodos } from "../../../utils/groupTodos";
import { evaluateAllPriority, evaluatePriority } from "../../../utils/score";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<GroupedTODO | TODO[]>
) {
	if (req.method === "GET") {
		const dateChanged = await db.touchLastPageAccess();
		const todos = await db.get();

		res
			.status(200)
			.json(
				groupTodos(
					dateChanged ? await db.save(await evaluateAllPriority(todos)) : todos
				)
			);
	} else if (req.method === "POST") {
		const { content, deadline, title } = req.body as NewTODO;
		const priority = await evaluatePriority({ content, deadline, title });
		const nextTodos = (await db.get()).concat({
			completed: false,
			content,
			createdAt: format(new Date(), "yyyy/MM/dd") as DateString,
			deadline,
			id: crypto.randomUUID(),
			priority,
			title,
			updatedAt: format(new Date(), "yyyy/MM/dd") as DateString
		});

		res.status(201).json(await db.save(nextTodos));
	} else {
		res.setHeader("Allow", ["GET", "POST"]);
		res.status(405).end();
	}
}
