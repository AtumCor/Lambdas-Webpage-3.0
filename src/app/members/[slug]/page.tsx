import fs from "fs";
import path from "path";

export default async function MemberPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "content/members", `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  return (
    <article className="prose lg:prose-xl">
      <h1 className="text-2xl font-bold mb-4">{params.slug}</h1>
      <pre className="whitespace-pre-wrap">{fileContent}</pre>
    </article>
  );
}
