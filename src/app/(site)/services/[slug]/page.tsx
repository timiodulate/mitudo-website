import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailView from "@/components/versionTwo/sections/services/ServiceDetail";
import { getService, services } from "@/data/services";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
	return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
	const { slug } = await params;
	const service = getService(slug);
	if (!service) return { title: "Service not found | Mitudo Agency" };
	return {
		title: `${service.name} | Mitudo Agency`,
		description: service.summary,
	};
}

export default async function ServicePage({ params }: { params: Params }) {
	const { slug } = await params;
	if (!getService(slug)) notFound();
	return <ServiceDetailView slug={slug} />;
}
