import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Brother = {
  id: string;
  name: string;
  nickname?: string;
  role?: string;
  portrait?: string;
  group?: string;
  major?: string;
};

export async function getAllBrothers(): Promise<Brother[]> {
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
