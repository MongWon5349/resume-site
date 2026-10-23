import type { Metadata } from "next";
import { jobs } from "@/content/resume";
import { generateWorkMetadata, WorkExperience } from "@/components/work-experience";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateWorkMetadata("zh", params);
}

export default function WorkPage({ params }: PageProps) {
  return <WorkExperience locale="zh" params={params} />;
}
