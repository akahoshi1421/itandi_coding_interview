import { useRouter } from "next/router";
import { EditForm } from "./_components/EditForm";

export default function Page() {
	const { id } = useRouter().query;

	// 初回描画時は query が空なので、id が確定してから描画する
	return typeof id === "string" ? <EditForm id={id} /> : null;
}
