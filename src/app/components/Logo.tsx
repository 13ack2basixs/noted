import Link from "next/link";

function Logo() {
  return (
    <div className="fixed top-0 left-0 pt-6 pl-10">
      <Link href={'/'} className="text-3xl font-bold">Noted</Link>
    </div>
  )
};

export default Logo;