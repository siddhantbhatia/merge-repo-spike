import { Header } from "app/components/header";
import { SearchBox } from "app/components/search-box";
import { Skill } from "app/types/skill";
import { FilterBox } from "app/ui/skill-listing/filter";

interface PageProps {
  searchParams?: {
    search?: string;
    filters?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const searchQuery = searchParams?.search || "";
  const filterQuery = searchParams?.filters || "";

  const data: Skill[] = await fetch(
    `http://localhost:3000/api/skill-listing?search=${searchQuery}&filters=${filterQuery}`
  ).then((res) => res.json());

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

          <div className="grid grid-cols-2 gap-4">
            {data.map((item, idx) => (
              <div
                key={idx}
                className="p-4 border rounded shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.tags}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
