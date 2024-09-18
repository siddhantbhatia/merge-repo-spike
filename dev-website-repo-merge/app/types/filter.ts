import { SkillTag } from "app/types/skill";

export enum FeatureFilterKey {
  InfiniteScroll = "infinite-scroll",
  HttpStreaming = "http-streaming",
}

export type FilterKey = SkillTag | FeatureFilterKey;

export interface Filter {
  key: FilterKey;
  label: string;
  type: "skill" | "page-feature";
}
