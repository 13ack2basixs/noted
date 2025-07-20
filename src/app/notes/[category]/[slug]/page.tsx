import { getContentBySlug } from '@/app/utils/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

export default async function NotePage({ params }: Props) {
  const { category, slug } = await params;
  const content = await getContentBySlug(category, slug);

  if (!content) return notFound();

  const { content: mdxContent } = content;

  return (
    <div className="prose mx-auto p-6">
      <MDXRemote source={mdxContent} />
    </div>
  );
}
