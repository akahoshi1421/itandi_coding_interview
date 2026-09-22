import { Button } from "../../components/ui/core/Button";
import { Input } from "../../components/ui/core/Input";
import { InputDate } from "../../components/ui/core/InputDate";
import { Stack } from "../../components/ui/core/Stack";
import { TextArea } from "../../components/ui/core/TextArea";
import { OneInput } from "./registForm/OneInput";

export function RegistForm() {
	return (
		<Stack
			direction="vertical"
			gapSize="xl"
			style={{
				background: "white",
				borderRadius: "10px",
				padding: "20px",
				width: "90%"
			}}
		>
			<Stack direction="vertical" gapSize="lg" style={{ width: "100%" }}>
				<OneInput itemId="title" itemTitle="タイトル">
					<Input
						id="title"
						placeholder="TODOタイトル"
						size="lg"
						width="calc(100% - 150px)"
					/>
				</OneInput>
				<OneInput itemId="content" itemTitle="内容">
					<TextArea
						id="content"
						placeholder="TODOの内容"
						size="lg"
						style={{
							maxWidth: "calc(100% - 200px)",
							minWidth: "calc(100% - 150px)"
						}}
					/>
				</OneInput>
				<OneInput itemId="deadline" itemTitle="期日">
					<InputDate id="deadline" size="lg" width="calc(100% - 150px)" />
				</OneInput>
			</Stack>
			<Stack
				direction="horizontal"
				style={{ justifyContent: "flex-end", width: "100%" }}
			>
				<Button size="lg" style={{ width: "150px" }} type="submit">
					登録
				</Button>
			</Stack>
		</Stack>
	);
}
