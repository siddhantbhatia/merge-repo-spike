import { FeatureFilterKey, Filter } from "app/types/filter";
import { SkillTag } from "app/types/skill";

export const FilterList: Filter[] = [
  {
    key: SkillTag.Frontend,
    label: "Frontend",
    type: "skill",
  },
  {
    key: SkillTag.Backend,
    label: "Backend",
    type: "skill",
  },
  {
    key: SkillTag.Monitoring,
    label: "Monitoring tools",
    type: "skill",
  },
  {
    key: SkillTag.LibraryFramework,
    label: "Libraries and Framework",
    type: "skill",
  },
  {
    key: SkillTag.Testing,
    label: "Testing",
    type: "skill",
  },
  {
    key: SkillTag.Language,
    label: "Languages",
    type: "skill",
  },
  {
    key: SkillTag.Concept,
    label: "Concepts",
    type: "skill",
  },
  {
    key: SkillTag.CICD,
    label: "CI/CD",
    type: "skill",
  },
  {
    key: FeatureFilterKey.InfiniteScroll,
    label: "Infinite scroll",
    type: "page-feature",
  },
  {
    key: FeatureFilterKey.HttpStreaming,
    label: "HTTP Streaming",
    type: "page-feature",
  },
];
