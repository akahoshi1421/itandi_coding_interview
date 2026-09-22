import { useForm } from "@tanstack/react-form";
import { format } from "date-fns";
import { taskSchema } from "../../schema/taskSchema";
import type { DateString } from "../../types";
import { useCreateTodo } from "./useCreateTodo";

export const useRegistForm = () => {
	const { mutateAsync } = useCreateTodo();

	return useForm({
		defaultValues: {
			content: "",
			deadline: undefined as Date | undefined,
			title: ""
		},
		onSubmit: async ({ formApi, value }) => {
			const { content, deadline, title } = taskSchema.parse(value);

			await mutateAsync({
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
