import { Filter } from "app/types/filter";
import { SkillTag } from "app/types/skill";

export const FilterList: Filter[] = [
  {
    key: SkillTag.Frontend,
    label: "Frontend",
  },
  {
    key: SkillTag.Backend,
    label: "Backend",
  },
  {
    key: SkillTag.Monitoring,
    label: "Monitoring tools",
  },
  {
    key: SkillTag.LibraryFramework,
    label: "Libraries and Framework",
  },
  {
    key: SkillTag.Testing,
    label: "Testing",
  },
  {
    key: SkillTag.Language,
    label: "Languages",
  },
  {
    key: SkillTag.Concept,
    label: "Concepts",
  },
  {
    key: SkillTag.CICD,
    label: "CI/CD",
  },
];
