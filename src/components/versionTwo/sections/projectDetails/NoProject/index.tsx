import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

export default function NoProject({ project }: { project: any }) {
	if (project) {
		return null;
	}

	return (
		<div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-2xl font-bold text-[#0D1B2A] mb-4">
					Project not found
				</h1>

				<Link href={"Home"}>
					<Button className="bg-[#0077FF] hover:bg-[#0066DD]">
						<ArrowLeft className="w-4 h-4 mr-2" />
						Back to Home
					</Button>
				</Link>
			</div>
		</div>
	);
}
