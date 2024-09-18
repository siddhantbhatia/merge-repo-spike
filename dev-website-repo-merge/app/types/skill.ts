export enum SkillTag {
  Frontend = "frontend",
  Backend = "backend",
  Monitoring = "monitoring",
  LibraryFramework = "libraryframework",
  Testing = "testing",
  Language = "language",
  Concept = "concept",
  CICD = "cicd",
}

export interface Skill {
  imageUrl?: string;
  name: string;
  tags: SkillTag[];
}
