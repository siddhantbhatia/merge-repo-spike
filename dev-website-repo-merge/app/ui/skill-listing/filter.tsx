"use client";
import { FilterList } from "app/static/data/filters";
import { FilterKey } from "app/types/filter";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
  useRouter,
} from "next/navigation";
import { useForm } from "react-hook-form";

const filterQueryParamName = "filters";

type FormValues = {
  [key in FilterKey]: boolean;
};

const skillFilters = FilterList.filter((filter) => filter.type === "skill");
const featureFilters = FilterList.filter(
  (filter) => filter.type === "page-feature"
);

export const FilterBox = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const searchFilters = searchParams?.get(filterQueryParamName)?.toString();
  const defaultValues = searchFilters
    ? searchFilters.split(",").reduce((prev: Record<string, boolean>, key) => {
        prev[key] = true;
        return prev;
      }, {})
    : {};

  const { register, watch } = useForm<FormValues>({
    defaultValues,
  });

  const handleFormChange = () => {
    const formState = watch();
    const params = new URLSearchParams(searchParams as ReadonlyURLSearchParams);

    const filters = Object.entries(formState)
      .filter(([_, value]) => value)
      .map(([key]) => key)
      .join(",");

    if (filters) {
      params.set(filterQueryParamName, filters);
    } else {
      params.delete(filterQueryParamName);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form onChange={handleFormChange}>
      <p>Page features</p>
      {featureFilters.map(({ key, label }) => (
        <div key={key} className="mb-2">
          <label className="flex items-center">
            <input {...register(key)} type="checkbox" className="mr-2" />
            {label}
          </label>
        </div>
      ))}
      <p>Skills</p>
      {skillFilters.map(({ key, label }) => (
        <div key={key} className="mb-2">
          <label className="flex items-center">
            <input {...register(key)} type="checkbox" className="mr-2" />
            {label}
          </label>
        </div>
      ))}
    </form>
  );
};
