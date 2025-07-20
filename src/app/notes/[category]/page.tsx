import PreviewCard from "@/app/components/PreviewCard";
import { getAllNotesMeta } from '@/app/utils/getAllFrontMatter';
import Link from "next/link";

type CategoryProps = {
  params: { category: string }
};

export default async function CategoryPage({ params }: CategoryProps) {
  const { category } = await params;
  const notes = await getAllNotesMeta(category);
  const capitaliseCategory = category[0].toUpperCase() + category.slice(1);

  return (
    <div className="pt-8 pl-8">
      <h1 className="text-7xl font-bold">{capitaliseCategory}</h1>
      {notes.map(note => (
        <Link href={`/notes/${category}/${note.slug}`} key={note.slug}><PreviewCard title={note.title} /></Link>
      ))}
    </div> 
  )
};
