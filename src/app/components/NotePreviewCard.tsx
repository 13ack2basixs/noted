type NotePreviewCardProps = {
  title: string,
}

export default function NotePreviewCard({ title }: NotePreviewCardProps) {
  return (
    <div className="">
      <span>{title}</span>
    </div>
  )
};  