import { Skill } from "app/types/skill";
import { Suspense } from "react";

interface SkillCardsProps {
  searchQuery: string;
  filterQuery: string;
}

export const SkillCards = async ({
  searchQuery,
  filterQuery,
}: SkillCardsProps) => {
  console.log("searchQuery inside skillcards:", searchQuery);

  const data: Skill[] = await fetch(
    `http://localhost:3000/api/skill-listing?search=${searchQuery}&filters=${filterQuery}`
  ).then((res) => res.json());

  console.log("searchQuery inside skillcards after await:", searchQuery);

  return (
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
  );
};
