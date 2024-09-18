"use client";

import { debounce } from "app/utils/debounce";
import {
  useSearchParams,
  usePathname,
  useRouter,
  ReadonlyURLSearchParams,
} from "next/navigation";

const searchQueryParamName = "search";

export const SearchBox = () => {
  const searchParams = useSearchParams();
  const defaultValue = searchParams?.get(searchQueryParamName)?.toString();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = debounce(function (term: string) {
    const params = new URLSearchParams(searchParams as ReadonlyURLSearchParams);
    if (term) {
      params.set(searchQueryParamName, term);
    } else {
      params.delete(searchQueryParamName);
    }
    replace(`${pathname}?${params.toString()}`);
  });

  return (
    <input
      type="text"
      placeholder="Search"
      className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={defaultValue}
    />
  );
};
