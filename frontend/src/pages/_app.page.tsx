import type { AppProps } from "next/app";
import { Header } from "../components/ui/Header";
import { Toast } from "../components/ui/Toast";
import { useToast } from "./_hooks/useToast";

export default function App({ Component, pageProps }: AppProps) {
	const toast = useToast();

	return (
		<>
			<Header />
			<Component {...pageProps} />
			{toast ? (
				<Toast key={toast.id} message={toast.message} state={toast.state} />
			) : null}
		</>
	);
}
