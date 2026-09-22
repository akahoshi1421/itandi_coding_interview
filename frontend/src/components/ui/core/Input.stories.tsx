import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Input } from "./Input";
import { Stack } from "./Stack";

const meta = {
	args: {
		disabled: false,
		invalid: false,
		onChange: fn(),
		placeholder: "入力してください",
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
	component: Input,
	parameters: {
		docs: {
			description: {
				component:
					"1行テキスト入力。`size` で大きさ、`invalid` でエラー状態を表す。`value` と `onChange` で制御コンポーネントとして使う。"
			}
		}
	},
	tags: ["autodocs"],
	title: "UI/Core/Input"
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
	name: "サイズ",
	render: () => (
		<Stack direction="vertical" gapSize="lg">
			<>
				{(["md", "lg", "xl"] as const).map((size) => (
					<Input key={size} placeholder={size} size={size} />
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
				<Input placeholder="通常" />
				<Input invalid placeholder="エラー" value="不正な値" />
				<Input disabled placeholder="無効" />
			</>
		</Stack>
	)
};
