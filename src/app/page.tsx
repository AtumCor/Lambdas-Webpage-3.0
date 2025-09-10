import Link from "next/link";

export default function HomePage() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Greene Lab</h1>
      <p className="text-lg text-gray-700 mb-6">
        Meet our members:
      </p>
      <div className="flex justify-center gap-4">
        {/* This will load content/members/1echan.md through the Next.js renderer */}
        <Link href="1echan" className="text-blue-600 underline">
          Eric Chan
        </Link>
      </div>
    </section>
  );
}
