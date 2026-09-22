import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { COLORS } from "../../../consts/colors";
import { Stack } from "./Stack";
import { Tag } from "./Tag";

const COLOR_OPTIONS = Object.fromEntries(
	(["red", "yellow", "green", "gray"] as const).flatMap((name) =>
		([300, 400, 500, 600, 700] as const).map((shade) => [
			`${name}.${shade}`,
			COLORS[name][shade]
		])
	)
);

const meta = {
	args: {
		children: "タグ",
		colorPalette: COLORS.green["500"],
		size: "md"
	},
	argTypes: {
		colorPalette: {
			control: "select",
			mapping: COLOR_OPTIONS,
			options: Object.keys(COLOR_OPTIONS)
		},
		size: {
			control: "radio",
			options: ["md", "lg", "xl"],
			table: { defaultValue: { summary: "md" } }
		}
	},
	component: Tag,
	parameters: {
		docs: {
			description: {
				component:
					"ラベル表示用のタグ。`colorPalette` に `COLORS` の値を渡して背景色を、`size` で文字サイズを指定する。"
			}
		}
	},
	tags: ["autodocs"],
	title: "UI/Core/Tag"
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Colors: Story = {
	name: "色",
	render: () => (
		<Stack direction="horizontal" gapSize="lg">
			<>
				<Tag colorPalette={COLORS.red["500"]}>red</Tag>
				<Tag colorPalette={COLORS.yellow["500"]}>yellow</Tag>
				<Tag colorPalette={COLORS.green["500"]}>green</Tag>
				<Tag colorPalette={COLORS.gray["500"]}>gray</Tag>
			</>
		</Stack>
	)
};

export const Sizes: Story = {
	name: "サイズ",
	render: () => (
		<Stack
			direction="horizontal"
			gapSize="lg"
			style={{ alignItems: "flex-start" }}
		>
			<>
				{(["md", "lg", "xl"] as const).map((size) => (
					<Tag colorPalette={COLORS.green["500"]} key={size} size={size}>
						{size}
					</Tag>
				))}
			</>
		</Stack>
	)
};
