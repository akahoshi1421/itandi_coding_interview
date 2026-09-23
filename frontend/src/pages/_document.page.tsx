import { Head, Html, Main, NextScript } from "next/document";
import { COLORS } from "../consts/colors";

export default function Document() {
	return (
		<Html lang="ja">
			<Head />
			<body
				css={{
					background: COLORS.gray["100"],
					margin: 0,
					overflowX: "hidden",
					padding: 0
				}}
			>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
