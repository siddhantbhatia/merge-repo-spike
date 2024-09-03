export enum SkillTag {
  Frontend = "Front End",
  Backend = "Back End",
  Monitoring = "Monitoring",
  LibraryFramework = "LibraryFramework",
  Testing = "Testing",
  Language = "Language",
  Concept = "Concept",
  CICD = "CICD",
}

export interface Skill {
  imageUrl?: string;
  name: string;
  tags: SkillTag[];
}
