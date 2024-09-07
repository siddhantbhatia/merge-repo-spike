import { SkillData } from "app/static/data/skills";
import { SkillTag } from "app/types/skill";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const searchQueryParam = searchParams.get("search");
  const filterQueryParam = searchParams.get("filters");

  const filterArray = filterQueryParam ? filterQueryParam.split(",") : [];

  const data = SkillData.filter((item) => {
    if (!searchQueryParam && !filterArray.length) {
      return true;
    }

    let condition = false;
    if (searchQueryParam) {
      condition =
        condition ||
        item.name.toLowerCase().includes(searchQueryParam.toLowerCase());
    }

    if (filterArray.length) {
      condition =
        condition ||
        filterArray.some((filter) => item.tags.includes(filter as SkillTag));
    }

    return condition;
  });

  return Response.json(data);
}
