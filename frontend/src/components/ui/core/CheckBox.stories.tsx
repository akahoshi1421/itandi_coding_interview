import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { CheckBox } from "./CheckBox";
import { Stack } from "./Stack";

const meta = {
	args: {
		checked: false,
		onChange: fn()
	},
	component: CheckBox,
	parameters: {
		docs: {
			description: {
				component:
					"チェックボックス。`checked` と `onChange` で制御コンポーネントとして使う。"
			}
		}
	},
	tags: ["autodocs"],
	title: "UI/Core/CheckBox"
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
	name: "状態",
	render: () => (
		<Stack direction="horizontal" gapSize="lg">
			<>
				<CheckBox />
				<CheckBox checked readOnly />
			</>
		</Stack>
	)
};
