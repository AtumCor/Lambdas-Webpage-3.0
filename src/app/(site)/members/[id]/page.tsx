import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";
import Link from "next/link";

type MemberFrontmatter = {
  id: string;
  name: string;
  nickname?: string;
  portrait?: string;
  group?: string;
  role?: string;
  links?: Record<string, string>;
};

async function getMemberData(id: string): Promise<{ frontmatter: MemberFrontmatter; content: string }> {
  // Extract first character of first and last name, Not used 
  // const [firstName, lastName] = name.split(" ");
  // const fileName = `${id}${firstName[0]}${lastName}.md`; // e.g., "1EC.md"
  // const filePath = path.join(process.cwd(), "src/content/members", `${id}.md`);

  // Dynamically find the file by id
  const membersDir = path.join(process.cwd(), "/src/content/members");
  const files = fs.readdirSync(membersDir);
  const fileName = files.find(f => f.startsWith(id));
  const filePath = path.join(membersDir, fileName!);


  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  return {
    frontmatter: data as MemberFrontmatter,
    content: processed.toString(),
  };
}

interface MemberPageProps {
  params: { id: string };
}

export default async function MemberPage(props: MemberPageProps) {
  const { id } = props.params;
  const { frontmatter, content } = await getMemberData(id);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Portrait & Basic Info */}
      <div className="flex flex-col items-center text-center mb-8">
        {frontmatter.portrait && (
          <Image
            src={`/${frontmatter.portrait}`}
            alt={frontmatter.name}
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        )}
        <h1 className="text-4xl font-bold mt-4">{frontmatter.name}</h1>
        {frontmatter.nickname && (
          <p className="text-lg italic text-gray-500 dark:text-gray-400">“{frontmatter.nickname}”</p>
        )}
        {frontmatter.role && (
          <p className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">
            {frontmatter.role} {frontmatter.group ? `• ${frontmatter.group}` : ""}
          </p>
        )}
      </div>

      {/* Links */}
      {frontmatter.links && Object.keys(frontmatter.links).length > 0 && (
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {Object.entries(frontmatter.links).map(([key, url]) =>
            url ? (
              <Link
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {key}
              </Link>
            ) : null
          )}
        </div>
      )}

      {/* Markdown content */}
      <article
        className="prose prose-neutral dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* Search / Related Links */}
      <div className="mt-8 text-center">
        <Link
          href={`/research/?search=${encodeURIComponent(frontmatter.name)}`}
          className="text-blue-600 hover:underline"
        >
          Research about {frontmatter.name}
        </Link>
        {" | "}
        <Link
          href={`/blog/?search=${encodeURIComponent(frontmatter.name)}`}
          className="text-blue-600 hover:underline"
        >
          Blog posts by {frontmatter.name}
        </Link>
      </div>
    </main>
  );
}
