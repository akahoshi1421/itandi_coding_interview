import Link from "next/link";
import { CheckBox } from "../../../../components/ui/core/CheckBox";
import { Stack } from "../../../../components/ui/core/Stack";
import { Tag } from "../../../../components/ui/core/Tag";
import { Text } from "../../../../components/ui/core/Text";
import { COLORS } from "../../../../consts/colors";
import type { Content } from "../../../../types/contents";

type OneToDoProps = Content;

export function OneToDo({
	content,
	id,
	priority,
	title,
	completed
}: OneToDoProps) {
	return (
		<Stack
			direction="vertical"
			gapSize="lg"
			style={{
				background: "white",
				borderRadius: "20px",
				height: "400px",
				minWidth: "300px",
				overflowY: "scroll",
				padding: "20px",
				scrollbarWidth: "none"
			}}
		>
			<Stack
				direction="horizontal"
				style={{ justifyContent: "space-between", width: "100%" }}
			>
				<Tag
					colorPalette={COLORS.red["500"]}
				>{`${completed ? "済" : priority}`}</Tag>
				<CheckBox checked={completed} />
			</Stack>
			<Link href={`/todos/${id}`}>
				<Text fontSize="xl">{title}</Text>
			</Link>
			<Text>{content}</Text>
			<Stack
				direction="horizontal"
				style={{ justifyContent: "flex-end", width: "100%" }}
			>
				<Text fontSize="sm">期限: YYYY/MM/DD</Text>
			</Stack>
		</Stack>
	);
}
