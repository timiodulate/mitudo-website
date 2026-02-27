export type Project = { id: string; title: string; image: string };

export async function fetchProjects(
	format?: string,
): Promise<Project[] | Record<string, Project>> {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_PROJECTS_API_URL}/api/projects?audience=mitudo&format=${format || "arr"}`,
		// {
		// 	headers: {
		// 		Authorization: `Bearer ${process.env.PROJECTS_API_KEY}`,
		// 	},
		// },
	);
	if (!res.ok) throw new Error(`Failed: ${res.status}`);
	const data = await res.json();
	return data.projects ?? data;
}
