import Head from "next/head";
import { Stack } from "../components/ui/core/Stack";
import { RegistForm } from "./_components/RegistForm";

export default function Page() {
	return (
		<>
			<Head>
				<title>Crazy TODO App</title>
				<meta
					content="Crazy TODO App for Conding Interview"
					name="description"
				/>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
			</Head>
			<Stack
				direction="vertical"
				gapSize="2xl"
				style={{
					alignItems: "center",
					justifyContent: "center",
					margin: "20px 0",
					width: "100%"
				}}
			>
				<RegistForm />
			</Stack>
		</>
	);
}
