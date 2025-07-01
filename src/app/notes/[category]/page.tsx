import NotePreviewCard from "@/app/components/PreviewCard";

type CategoryProps = {
  params: {category: string}
};

export default async function CategoryPage({ params }: CategoryProps) {
  const notes = [
    { title: 'CS2040 Stacks and Queues', slug: 'cs2040-stacks-and-queues' },
    { title: 'CS2040 Graphs', slug: 'cs2040-graphs' },
    { title: 'CS2107 Web Security', slug: 'cs2107-web-security' },
    { title: 'CS2107 Network Security', slug: 'cs2107-network-security' },
    { title: 'CS2040 Binary Trees', slug: 'cs2040-binary-trees' },
  ];

  const { category } = await params;
  const capitaliseCategory = category[0].toUpperCase() + category.slice(1);

  return (
    <div className="pt-8 pl-8">
      <h1 className="text-7xl font-bold">{capitaliseCategory}</h1>
      {notes.map(note => (
        <NotePreviewCard key={note.slug} title={note.title} />
      ))}
    </div>
  )
};
