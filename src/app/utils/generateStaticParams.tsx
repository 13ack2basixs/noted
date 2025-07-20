import { getAllSlugs } from '@/app/utils/mdx';

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map(({ slug, category }) => ({ slug, category }));
}
