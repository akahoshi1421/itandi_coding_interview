import Head from "next/head";
import Link from "next/link";
import { COLORS } from "../../consts/colors";
import { Stack } from "./core/Stack";
import { Text } from "./core/Text";

export function Header() {
	return (
		<>
			<Head>
				<meta
					content="Crazy TODO App for Conding Interview"
					name="description"
				/>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
			</Head>
			<Stack
				direction="horizontal"
				style={{
					background: COLORS.blue["200"],
					padding: "10px",
					width: "100%"
				}}
			>
				<Link css={{ textDecoration: "none" }} href="/">
					<Text as="h1" fontSize="2xl">
						Jev Jam
					</Text>
				</Link>
			</Stack>
		</>
	);
}
