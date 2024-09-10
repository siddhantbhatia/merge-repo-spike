import { Header } from "app/components/header";
import { SearchBox } from "app/components/search-box";
import { FilterBox } from "app/ui/skill-listing/filter";
import { SkillCards } from "app/ui/skill-listing/skill-cards";
import { Suspense } from "react";

interface PageProps {
  searchParams?: {
    search?: string;
    filters?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const searchQuery = searchParams?.search || "";
  const filterQuery = searchParams?.filters || "";

  return (
    <div
      className={`min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
    >
      <Header title={{ text: "Logo", href: "/portfolio" }} />
      <div className="flex">
        <aside className="w-1/4 p-4 border-r">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <FilterBox />
        </aside>

        <main className="w-3/4 p-4">
          <div className="mb-4">
            <SearchBox />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <SkillCards searchQuery={searchQuery} filterQuery={filterQuery} />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
