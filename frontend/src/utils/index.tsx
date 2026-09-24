import fs from "node:fs/promises";
import libpath from "node:path";
import { format } from "date-fns";
import type { DateString, TODO } from "../types";

type Store = {
	lastPageAccess: DateString;
	todos: TODO[];
};

const createDB = () => {
	const todosJsonPath = libpath.join(process.cwd(), "todos.json");

	const read = async () => {
		const raw = await fs.readFile(todosJsonPath, { encoding: "utf-8" });

		return JSON.parse(raw) as Store;
	};

	const write = async (store: Store) => {
		// biome のフォーマット(タブ・末尾改行)に合わせて書き出し、pnpm biome が落ちないようにする
		await fs.writeFile(todosJsonPath, `${JSON.stringify(store, null, "\t")}\n`);
	};

	const save = async (todos: TODO[]) => {
		await write({ ...(await read()), todos });

		return todos;
	};

	const get = async () => (await read()).todos;

	const touchLastPageAccess = async () => {
		const store = await read();
		const today = format(new Date(), "yyyy/MM/dd") as DateString;

		await write({ ...store, lastPageAccess: today });

		return store.lastPageAccess !== today;
	};

	return { get, save, touchLastPageAccess };
};

export const db = createDB();
