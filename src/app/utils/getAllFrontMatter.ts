import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export type NoteMeta = {
  title: string;
  date: string;
  slug: string;
  tags?: string[];
};

export type ReviewMeta = {
  title: string;
  author: string;
  date: string;
  slug: string;
  tags?: string[];
};

export async function getAllNotesMeta(category: string): Promise<NoteMeta[]> {
  const dir = path.join(process.cwd(), "markdown", "notes", category);
  const files = await fs.readdir(dir);

  const notes = await Promise.all(
    files
      .map(async (file) => {
        const filePath = path.join(dir, file);
        const fileContent = await fs.readFile(filePath, "utf-8");
        const { data } = matter(fileContent);

        return {
          title: data.title,
          date: data.date,
          slug: file.replace(/\.mdx$/, ""),
          tags: data.tags || [],
        };
      })
  );

  return notes.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getReviewsMeta(category: string): Promise<ReviewMeta[]> {
  const dir = path.join(process.cwd(), "markdown", "my-take", category);
  const files = await fs.readdir(dir);

  const notes = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const filePath = path.join(dir, file);
        const fileContent = await fs.readFile(filePath, "utf-8");
        const { data } = matter(fileContent);

        return {
          title: data.title,
          author: data.author,
          date: data.date,
          slug: file.replace(/\.mdx$/, ""),
          tags: data.tags || [],
        };
      })
  );

 return notes.sort((a, b) => b.date.localeCompare(a.date));
}
