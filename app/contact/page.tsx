import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO Title",
  keywords: ["SEO", "Title"],
};

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-7xl">Contact</h1>
      <p>This is the contact page.</p>
    </div>
  );
}
