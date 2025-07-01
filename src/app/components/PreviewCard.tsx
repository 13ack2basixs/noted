type PreviewCardProps = {
  title: string,
}

export default function PreviewCard({ title }: PreviewCardProps) {
  return (
    <div className="block max-w p-5 bg-[#e2e1df] hover:bg-[#d1ceca] border-black rounded-lg shadow-md">
      <span>{title}</span>
    </div>
  )
};  