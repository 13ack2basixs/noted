type NoteCategoryCardProps = {
  title: string;
}

function NoteCategoryCard({ title }: NoteCategoryCardProps) {
  return (
    <div className="block max-w-sm p-8 bg-[#e2e1df] hover:bg-[#d1ceca] border-black rounded-lg shadow-md">
      <span>{title}</span>
    </div>
  )
};
  
export default NoteCategoryCard;