import Link from "next/link";
import PreviewCard from "../components/PreviewCard";

export default function WhatsThat() {
  return (
    <div className="pt-8 pl-8">
      <div>
        <h1 className="text-7xl font-bold">What&apos;s that</h1>
        <p className="text-lg italic mb-6">The things I once had to Google</p>
      </div>

      <section className="mt-12">
        <div className="display-block space-x-10 mb-6">
          <Link href={'/whats-that/'}><PreviewCard title="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus." /></Link>
          <Link href={'/whats-that/'}><PreviewCard title="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus." /></Link>
          <Link href={'/whats-that/'}><PreviewCard title="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus." /></Link>
        </div>
      </section>
    </div>
  )
};