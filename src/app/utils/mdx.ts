import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_PATH = path.join(process.cwd(), 'markdown/notes');

export const getAllSlugs = () => {
  const categories = fs.readdirSync(CONTENT_PATH);
  const allSlugs: { category: string; slug: string }[] = [];

  categories.forEach((category) => {
    const dirPath = path.join(CONTENT_PATH, category);
    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
      if (file.endsWith('.mdx')) {
        allSlugs.push({
          category,
          slug: file.replace(/\.mdx$/, ''),
        });
      }
    });
  });

  return allSlugs;
};

export const getContentBySlug = async (
  category: string,
  slug: string
): Promise<{
  frontMatter: Record<string, string>;
  content: string;
} | null> => {
  const filePath = path.join(CONTENT_PATH, category, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);
  return { frontMatter: data, content };
};

