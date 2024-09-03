import { Header } from "app/components/header";
import { SearchBox } from "app/components/search-box";
import { Skill } from "app/types/skill";

interface Item {
  id: number;
  category: string;
  title: string;
}

const data: Item[] = [
  { id: 1, category: "Category 1", title: "Card 1" },
  { id: 2, category: "Category 2", title: "Card 2" },
  { id: 3, category: "Category 1", title: "Card 3" },
  { id: 4, category: "Category 3", title: "Card 4" },
];

interface Filters {
  [category: string]: boolean;
}

interface PageProps {
  searchParams?: {
    search?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const searchQuery = searchParams?.search || "";

  const data: Skill[] = await fetch(
    `http://localhost:3000/api/skill-listing?search=${searchQuery}`
  ).then((res) => res.json());
  // const data = await response.json();

  // const [searchTerm, setSearchTerm] = useState("");
  // const [filters, setFilters] = useState<Filters>({
  //   "Category 1": false,
  //   "Category 2": false,
  //   "Category 3": false,
  // });

  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(event.target.value.toLowerCase());
  // };

  // const handleFilterChange = (category: string) => {
  //   setFilters({
  //     ...filters,
  //     [category]: !filters[category],
  //   });
  // };

  // const filteredData = data.filter((item) => {
  //   const matchesSearch =
  //     item.title.toLowerCase().includes(searchTerm) ||
  //     item.category.toLowerCase().includes(searchTerm);
  //   const matchesFilter =
  //     Object.keys(filters).some(
  //       (filter) => filters[filter] && item.category === filter
  //     ) || !Object.values(filters).some((val) => val);

  //   return matchesSearch && matchesFilter;
  // });

  return (
    <div
      className={`min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
    >
      <Header title={{ text: "Logo", href: "/portfolio" }} />
      <div className="flex">
        <aside className="w-1/4 p-4 border-r">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          {/* {Object.keys(filters).map((category) => (
            <div key={category} className="mb-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={filters[category]}
                  onChange={() => handleFilterChange(category)}
                />
                {category}
              </label>
            </div>
          ))} */}
        </aside>

        <main className="w-3/4 p-4">
          <div className="mb-4">
            <SearchBox />
            {/* <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
              value={searchTerm}
              onChange={handleSearch}
            /> */}
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
