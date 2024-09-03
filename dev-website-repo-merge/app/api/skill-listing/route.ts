import { SkillData } from "app/static/data/skils";
import { NextRequest } from "next/server";

interface DataItem {
  id: number;
  name: string;
  age: number;
  city: string;
}

const data: DataItem[] = [
  { id: 1, name: "John", age: 25, city: "New York" },
  { id: 2, name: "Jane", age: 30, city: "London" },
  { id: 3, name: "Bob", age: 35, city: "Paris" },
  { id: 4, name: "Alice", age: 20, city: "Tokyo" },
];

interface Filter {
  key: keyof DataItem;
  value: string;
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const searchQueryParam = searchParams.get("search");

  const data = searchQueryParam
    ? SkillData.filter((item) => item.name.includes(searchQueryParam))
    : SkillData;

  return Response.json(data);
}
