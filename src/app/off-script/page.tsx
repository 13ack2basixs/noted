import Link from "next/link";
import PreviewCard from "../components/PreviewCard";

export default function OffScript() {
  return (
    <div className="pt-8 pl-8">
      <div>
        <h1 className="text-7xl font-bold">Off Script</h1>
        <p className="text-lg italic mb-6">Random thoughts and questions I have...</p>
      </div>

      <section className="mt-12">
        <div className="display-block space-x-10 mb-6">
          <Link href={'/off-script/'}><PreviewCard title="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus." /></Link>
          <Link href={'/off-script/'}><PreviewCard title="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus." /></Link>
          <Link href={'/off-script/'}><PreviewCard title="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus." /></Link>
        </div>
      </section>
    </div>
  )
};