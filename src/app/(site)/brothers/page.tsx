
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Brother = {
  id: string;
  name: string;
  nickname: string;
  role?: string;
  portrait?: string;
  group?: string;
  major?: string;
};

// 1️⃣ Load all brothers from markdown
async function getAllBrothers(): Promise<Brother[]> {
  const membersDir = path.join(process.cwd(), "/src/content/members");
  if (!fs.existsSync(membersDir)) return [];

  const files = fs.readdirSync(membersDir);

  return files.map((fileName) => {
    const filePath = path.join(membersDir, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      id: data.id,
      name: data.name,
      nickname: data.nickname,
      role: data.role,
      portrait: data.portrait,
      group: data.group || "Unknown",
      major: data.major,
    } as Brother;
  });
}

// 2️⃣ Group brothers by their group
function groupBrothers(brothers: Brother[]): Record<string, Brother[]> {
  return brothers.reduce((acc, brother) => {
    const group = brother.group || "Unknown";
    if (!acc[group]) acc[group] = [];
    acc[group].push(brother);
    return acc;
  }, {} as Record<string, Brother[]>);
}

// 3️⃣ Custom group order
const groupOrder = ["charter", "alpha", "beta", "gamgam", "delta", "epsilon", "zeta", "eta", "theta", "iota", "kappa", "lambda"];

export default async function BrothersPage() {
  const brothers = await getAllBrothers();
  const grouped = groupBrothers(brothers);

  const sortedGroups = Object.keys(grouped).sort((a, b) => {
    const indexA = groupOrder.indexOf(a);
    const indexB = groupOrder.indexOf(b);
    if (indexA === -1 && indexB === -1) return a.localeCompare(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  return (
    <main className="py-16 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Meet the Brothers</h1>

        {sortedGroups.map((groupName) => (
          <section key={groupName} className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">{groupName}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {grouped[groupName]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((brother) => (
                  <Link
                    key={brother.id}
                    href={`/members/${brother.id}`}
                    className="relative bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 flex flex-col items-center hover:shadow-lg transition transform hover:-translate-y-1"
                  >
                    {/* Top-left role icon */}
                    <div className="absolute top-2 left-2 text-gray-500 dark:text-gray-400">
                      {brother.role?.toLowerCase() === "alumni" ? (
                        <FontAwesomeIcon icon={["fas", "graduation-cap"]} size="lg" />
                      ) : (
                        <FontAwesomeIcon icon={["fas", "user"]} size="lg" />
                      )}
                    </div>

                    {/* Circular portrait */}
                    {brother.portrait && (
                      <Image
                        src={`/${brother.portrait}`}
                        alt={brother.name}
                        width={150}
                        height={150}
                        className="rounded-full object-cover w-36 h-36 mt-2 transition-transform duration-200"
                      />
                    )}

                    {/* Name & info */}
                    <h3 className="mt-4 text-xl font-semibold">{brother.name}</h3>
                    {brother.nickname && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">#{brother.id} {brother.nickname}</p>
                    )}
                    {brother.major && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">{brother.major}</p>
                    )}
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
