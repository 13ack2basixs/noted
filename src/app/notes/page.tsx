import NoteCategoryCard from "../components/NoteCategoryCard";

export default function Notes() {
  return (
    <div className="pt-8 pl-8">
      <div>
        <h1 className="text-7xl font-bold">Notes</h1>
        <p className="text-lg italic mb-6">Notes worth nothing</p>
      </div>

      <section className="mt-12">
        <div className="flex justify-center space-x-10 mb-6">
          <NoteCategoryCard title="Modules" />
          <NoteCategoryCard title="LeetCode" />
          <NoteCategoryCard title="Others" />
        </div>
      </section>
    </div>
  )
};