import Link from "next/link";
import { CheckBox } from "../../../../components/ui/core/CheckBox";
import { Stack } from "../../../../components/ui/core/Stack";
import { Tag } from "../../../../components/ui/core/Tag";
import { Text } from "../../../../components/ui/core/Text";
import type { TODO } from "../../../../types";
import { getToDoTagColor } from "../../../../utils/getToDoTagColor";
import { useUpdateTodo } from "../../../_hooks/useUpdateTodo";

type OneToDoProps = TODO;

export function OneToDo({
	content,
	id,
	priority,
	title,
	completed,
	deadline,
	createdAt,
	updatedAt
}: OneToDoProps) {
	const tagColor = getToDoTagColor(priority);
	const { updateTodo } = useUpdateTodo();

	return (
		<Stack
			direction="vertical"
			gapSize="lg"
			style={{
				background: "white",
				borderRadius: "20px",
				height: "250px",
				minWidth: "300px",
				overflowY: "scroll",
				padding: "20px",
				scrollbarWidth: "none",
				width: "300px"
			}}
		>
			<Stack
				direction="horizontal"
				style={{ justifyContent: "space-between", width: "100%" }}
			>
				<Tag colorPalette={tagColor}>{`${completed ? "済" : priority}`}</Tag>
				<CheckBox
					checked={completed}
					onChange={(e) => {
						updateTodo(id, { completed: e.target.checked });
					}}
				/>
			</Stack>
			<Link href={`/todos/${id}`}>
				<Text fontSize="xl">{title}</Text>
			</Link>
			<Text>{content}</Text>
			<Stack
				direction="horizontal"
				style={{ justifyContent: "flex-end", width: "100%" }}
			>
				<Stack direction="vertical" gapSize="sm">
					<Text fontSize="md">期限: {deadline}</Text>
					<Text fontSize="sm" style={{ margin: 0 }}>
						作成: {createdAt}
					</Text>
					<Text fontSize="sm" style={{ margin: 0 }}>
						最終更新: {updatedAt}
					</Text>
				</Stack>
			</Stack>
		</Stack>
	);
}
