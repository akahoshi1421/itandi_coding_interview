import { useForm } from "@tanstack/react-form";
import { format } from "date-fns";
import { taskSchema } from "../../schema/taskSchema";
import type { DateString } from "../../types";
import { useCreateTodo } from "./useCreateTodo";

export const useRegistForm = () => {
	const createTodo = useCreateTodo();

	return useForm({
		defaultValues: {
			content: "",
			deadline: undefined as Date | undefined,
			title: ""
		},
		onSubmit: async ({ formApi, value }) => {
			const { content, deadline, title } = value;

			// validators.onSubmit で弾かれているので実際には通らない。型を Date に絞るためのガード
			if (!deadline) {
				return;
			}

			await createTodo({
				content,
				deadline: format(deadline, "yyyy/MM/dd") as DateString,
				title
			});
			formApi.reset();
		},
		validators: {
			onSubmit: taskSchema
		}
	});
};
