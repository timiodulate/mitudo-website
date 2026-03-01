// export type Project = { id: string; title: string; image: string };

export async function fetchProjects(
	format?: string,
): Promise<any[] | Record<string, any>> {
	// const res = await fetch(
	// 	`${process.env.NEXT_PUBLIC_PROJECTS_API_URL}/api/projects?audience=mitudo&format=${format || "arr"}`,
	// 	// {
	// 	// 	headers: {
	// 	// 		Authorization: `Bearer ${process.env.PROJECTS_API_KEY}`,
	// 	// 	},
	// 	// },
	// );
	// if (!res.ok) throw new Error(`Failed: ${res.status}`);
	// const data = await res.json();
	// return data.projects ?? data;

	const url = new URL(
		"/api/projects",
		process.env.NEXT_PUBLIC_PROJECTS_API_URL,
	);
	url.searchParams.set("audience", "mitudo");
	url.searchParams.set("format", "arr");

	const res = await fetch(url.toString(), { cache: "no-store" });
	if (!res.ok) throw new Error(`Failed: ${res.status}`);

	const payload = await res.json();

	if (Array.isArray(payload?.data)) return payload.data;
	if (payload?.data && typeof payload.data === "object")
		return Object.values(payload.data);

	return [];
}
