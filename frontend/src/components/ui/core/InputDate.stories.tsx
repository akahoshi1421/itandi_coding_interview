import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { InputDate } from "./InputDate";
import { Stack } from "./Stack";

const meta = {
	args: {
		disabled: false,
		invalid: false,
		onChange: fn(),
		required: false,
		size: "md"
	},
	argTypes: {
		size: {
			control: "radio",
			options: ["md", "lg", "xl"],
			table: { defaultValue: { summary: "md" } }
		}
	},
	component: InputDate,
	parameters: {
		docs: {
			description: {
				component:
					"日付入力。`Input` のスタイルと props をそのまま引き継ぐ。`value` は `YYYY-MM-DD` 形式の文字列。"
			}
		}
	},
	tags: ["autodocs"],
	title: "UI/Core/InputDate"
} satisfies Meta<typeof InputDate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
	name: "サイズ",
	render: () => (
		<Stack direction="vertical" gapSize="lg">
			<>
				{(["md", "lg", "xl"] as const).map((size) => (
					<InputDate key={size} size={size} />
				))}
			</>
		</Stack>
	)
};

export const States: Story = {
	name: "状態",
	render: () => (
		<Stack direction="vertical" gapSize="lg">
			<>
				<InputDate />
				<InputDate invalid value="2026-09-22" />
				<InputDate disabled />
			</>
		</Stack>
	)
};
