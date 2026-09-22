import type { InputProps } from "./Input";
import { Input } from "./Input";

type InputDateProps = InputProps;

export function InputDate(props: InputDateProps) {
	return <Input type="date" {...props} />;
}
