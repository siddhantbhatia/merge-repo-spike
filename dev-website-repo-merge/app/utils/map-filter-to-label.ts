import { SkillTag } from "app/types/skill";

export const mapTagToLabel = (tag: SkillTag) => {
  switch (tag) {
    case SkillTag.Frontend:
      return "Frontend";
    case SkillTag.Backend:
      return "Backend";
    case SkillTag.Language:
      return "Language";
    case SkillTag.LibraryFramework:
      return "Library/Framework";
    case SkillTag.Monitoring:
      return "Monitoring tool";
    case SkillTag.Concept:
      return "Concept";
    case SkillTag.CICD:
      return "CI/CD";
  }
};
