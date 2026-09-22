import { format } from "date-fns";
import { Button } from "../../components/ui/core/Button";
import { Input } from "../../components/ui/core/Input";
import { InputDate } from "../../components/ui/core/InputDate";
import { Stack } from "../../components/ui/core/Stack";
import { TextArea } from "../../components/ui/core/TextArea";
import { useRegistForm } from "../_hooks/useRegistForm";
import { OneInput } from "./registForm/OneInput";

export function RegistForm() {
	const form = useRegistForm();

	return (
		<form
			css={{ width: "90%" }}
			onSubmit={(e) => {
				e.preventDefault();
				void form.handleSubmit();
			}}
		>
			<Stack
				direction="vertical"
				gapSize="xl"
				style={{
					background: "white",
					borderRadius: "10px",
					padding: "20px"
				}}
			>
				<Stack direction="vertical" gapSize="lg" style={{ width: "100%" }}>
					<form.Field name="title">
						{(field) => (
							<OneInput
								invalid={field.state.meta.errors.length > 0}
								invalidMessage={field.state.meta.errors[0]?.message}
								itemId="title"
								itemTitle="タイトル"
							>
								<Input
									id="title"
									invalid={field.state.meta.errors.length > 0}
									onBlur={field.handleBlur}
									onChange={(e) => {
										field.handleChange(e.target.value);
									}}
									placeholder="TODOタイトル"
									size="lg"
									value={field.state.value}
									width="calc(100% - 150px)"
								/>
							</OneInput>
						)}
					</form.Field>
					<form.Field name="content">
						{(field) => (
							<OneInput itemId="content" itemTitle="内容">
								<TextArea
									id="content"
									onBlur={field.handleBlur}
									onChange={(e) => {
										field.handleChange(e.target.value);
									}}
									placeholder="TODOの内容"
									size="lg"
									style={{
										maxWidth: "calc(100% - 200px)",
										minWidth: "calc(100% - 150px)"
									}}
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
								itemId="deadline"
								itemTitle="期日"
							>
								<InputDate
									id="deadline"
									invalid={field.state.meta.errors.length > 0}
									onBlur={field.handleBlur}
									onChange={(e) => {
										field.handleChange(
											e.target.value ? new Date(e.target.value) : undefined
										);
									}}
									size="lg"
									value={
										field.state.value
											? format(field.state.value, "yyyy-MM-dd")
											: ""
									}
									width="calc(100% - 150px)"
								/>
							</OneInput>
						)}
					</form.Field>
				</Stack>
				<Stack
					direction="horizontal"
					style={{ justifyContent: "flex-end", width: "100%" }}
				>
					<form.Subscribe selector={(state) => state.isSubmitting}>
						{(isSubmitting) => (
							<Button
								disabled={isSubmitting}
								size="lg"
								style={{ width: "150px" }}
								type="submit"
							>
								登録
							</Button>
						)}
					</form.Subscribe>
				</Stack>
			</Stack>
		</form>
	);
}
