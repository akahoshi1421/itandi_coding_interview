import { useForm } from "@tanstack/react-form";
import { taskSchema } from "../../schema/taskSchema";

export const useRegistForm = () =>
	useForm({
		defaultValues: {
			content: "",
			deadline: undefined as Date | undefined,
			title: ""
		},
		onSubmit: ({ value }) => {
			// TODO: API接続
			console.log(value);
		},
		validators: {
			onSubmit: taskSchema
		}
	});
