// section.model.ts

import { Checkable } from "./checkable.model";
import { Job } from './job.model';
import { Project } from './project.model';
import { Entry } from './entry.model';

export enum SectionType {
  job = 'job',
  project = 'project',
}

export class Section implements Checkable {
  isChecked: boolean = false;

  constructor(
    public title: string,
    public type: SectionType,
    public entries: Entry[]
  ) {}

  static fromJson(json: any): Section {
    console.log('Section JSON:', json);
    const sectionType = Section.sectionTypeFromString(json.type);
    const entries: Entry[] = json.entries.map((e: any) => {
      switch (sectionType) {
        case SectionType.job:
          return Job.fromJson(e);
        case SectionType.project:
          return Project.fromJson(e);
        default:
          throw new Error(`Unknown entry type: ${e.type}`);
      }
    });

    return new Section(json.title, sectionType, entries);
  }

  toJson(): any {
    return {
      title: this.title,
      type: Section.sectionTypeToString(this.type),
      entries: this.entries.map((c) => c.toJson()),
    };
  }

  toLaTeX(): string {
    const checkedentries = this.entries.filter(
      (entry) => entry.isChecked,
    );
    const entriesLaTeX = checkedentries
      .map((entry) => entry.toLaTeX())
      .join('\n');

    return `
\\resumeSection{${this.title}}
\\resumeEntryListStart
  ${entriesLaTeX}
\\resumeEntryListEnd
`;
  }

  private static sectionTypeFromString(typeString: string): SectionType {
    switch (typeString) {
      case 'job':
        return SectionType.job;
      case 'project':
        return SectionType.project;
      default:
        throw new Error(`Unknown section type: ${typeString}`);
    }
  }

  private static sectionTypeToString(sectionType: SectionType): string {
    switch (sectionType) {
      case SectionType.job:
        return 'job';
      case SectionType.project:
        return 'project';
      default:
        throw new Error(`Unknown section type: ${sectionType}`);
    }
  }
}
