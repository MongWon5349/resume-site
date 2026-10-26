import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { getSite } from "@/content/site";

const site = getSite("en");

export const metadata: Metadata = {
  title: "Mengyuan Pang · AI Product Growth / Full-stack Operations",
  description: site.profile.summary,
  openGraph: {
    title: "Mengyuan Pang · AI Product Growth / Full-stack Operations",
    description: site.profile.summary,
    locale: "en_US",
    type: "profile",
  },
};

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
