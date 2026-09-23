import { format } from "date-fns";
import { useRouter } from "next/router";
import { Button } from "../../../../components/ui/core/Button";
import { Input } from "../../../../components/ui/core/Input";
import { InputDate } from "../../../../components/ui/core/InputDate";
import { Stack } from "../../../../components/ui/core/Stack";
import { Tag } from "../../../../components/ui/core/Tag";
import { Text } from "../../../../components/ui/core/Text";
import { TextArea } from "../../../../components/ui/core/TextArea";
import { getToDoTagColor } from "../../../../utils/getToDoTagColor";
import { useDeleteTodo } from "../../../_hooks/useDeleteTodo";
import { useEditForm } from "../../../_hooks/useEditForm";
import { useTodo } from "../../../_hooks/useTodo";
import { OneInput } from "./oneInput/OneInput";

export function EditForm({ id }: { id: string }) {
	const { data: todo, error, isPending } = useTodo(id);
	const form = useEditForm(id, todo);
	const { deleteTodo, isDeleting } = useDeleteTodo();
	const router = useRouter();

	if (error) {
		return <Text>TODOの取得に失敗しました。</Text>;
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				void form.handleSubmit();
			}}
		>
			<Stack
				direction="vertical"
				gapSize="2xl"
				style={{ padding: "20px", width: "100%" }}
			>
				<Stack
					direction="horizontal"
					gapSize="2xl"
					style={{ alignItems: "center", width: "60%" }}
				>
					<form.Field name="title">
						{(field) => (
							<OneInput
								invalid={field.state.meta.errors.length > 0}
								invalidMessage={field.state.meta.errors[0]?.message}
							>
								<Input
									disabled={isPending}
									invalid={field.state.meta.errors.length > 0}
									onBlur={field.handleBlur}
									onChange={(e) => {
										field.handleChange(e.target.value);
									}}
									size="xl"
									value={field.state.value}
									width="93%"
								/>
							</OneInput>
						)}
					</form.Field>
					{todo ? (
						<Tag colorPalette={getToDoTagColor(todo.priority)} size="xl">
							{`${todo.completed ? "済" : todo.priority}`}
						</Tag>
					) : null}
				</Stack>
				<form.Field name="content">
					{(field) => (
						<OneInput>
							<TextArea
								disabled={isPending}
								onBlur={field.handleBlur}
								onChange={(e) => {
									field.handleChange(e.target.value);
								}}
								size="xl"
								style={{ minHeight: "250px", width: "80%" }}
								value={field.state.value}
							/>
						</OneInput>
					)}
				</form.Field>
				<form.Field name="deadline">
					{(field) => (
						<OneInput
							invalid={field.state.meta.errors.length > 0}
							invalidMessage={field.state.meta.errors[0]?.message}
						>
							<InputDate
								disabled={isPending}
								invalid={field.state.meta.errors.length > 0}
								onBlur={field.handleBlur}
								onChange={(e) => {
									field.handleChange(
										e.target.value ? new Date(e.target.value) : undefined
									);
								}}
								size="xl"
								value={
									field.state.value
										? format(field.state.value, "yyyy-MM-dd")
										: ""
								}
								width="60%"
							/>
						</OneInput>
					)}
				</form.Field>
				<Stack direction="horizontal" style={{ alignItems: "center" }}>
					<Button
						disabled={isPending || isDeleting}
						onClick={async () => {
							await deleteTodo(id);
							await router.push("/");
						}}
						size="xl"
						style={{ width: "150px" }}
						variant="outline"
					>
						削除
					</Button>
					<form.Subscribe selector={(state) => state.isSubmitting}>
						{(isSubmitting) => (
							<Button
								disabled={isPending || isSubmitting}
								size="xl"
								style={{ width: "150px" }}
								type="submit"
							>
								変更
							</Button>
						)}
					</form.Subscribe>
				</Stack>
			</Stack>
		</form>
	);
}
