export const getClusterTag = (priorityTitle: "高" | "中" | "低" | "完了") => {
	switch (priorityTitle) {
		case "高":
			return "red";
		case "中":
			return "yellow";
		case "低":
			return "green";
		default:
			return "gray";
	}
};
