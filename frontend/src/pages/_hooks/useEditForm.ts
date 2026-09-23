import { useForm } from "@tanstack/react-form";
import { format, parse } from "date-fns";
import { useRouter } from "next/router";
import { taskSchema } from "../../schema/taskSchema";
import type { DateString, TODO } from "../../types";
import { useUpdateTodo } from "./useUpdateTodo";

// todo が未取得(undefined)の間は空のフォーム。取得できたら defaultValues の変更で値が入る(未入力の間だけ)
export const useEditForm = (id: string, todo: TODO | undefined) => {
	const { isUpdating, updateTodo } = useUpdateTodo();
	const router = useRouter();
	const defaultValues: { content: string; deadline?: Date; title: string } = {
		content: todo?.content ?? "",
		deadline: todo ? parse(todo.deadline, "yyyy/MM/dd", new Date()) : undefined,
		title: todo?.title ?? ""
	};

	const form = useForm({
		defaultValues,
		onSubmit: ({ value }) => {
			const { content, deadline, title } = value;

			// validators.onSubmit で弾かれているので実際には通らない。型を Date に絞るためのガード
			if (!deadline) {
				return;
			}

			updateTodo(
				id,
				{
					content,
					deadline: format(deadline, "yyyy/MM/dd") as DateString,
					title
				},
				() => {
					void router.push("/");
				}
			);
		},
		validators: {
			onSubmit: taskSchema
		}
	});

	return { form, isUpdating };
};
