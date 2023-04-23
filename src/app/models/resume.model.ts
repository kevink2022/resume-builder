// resume.model.ts

import { Link } from './link.model';
import { Section } from './section.model';

export class Resume {
  constructor(
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public email: string,
    public links: Link[],
    public sections: Section[],
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static fromJson(json: any): Resume {
    return new Resume(
      json.first_name,
      json.last_name,
      json.phone_number,
      json.email,
      json.links.map((e: any) => Link.fromJson(e)),
      json.sections.map((e: any) => Section.fromJson(e)),
    );
  }

  toJson(): any {
    return {
      first_name: this.firstName,
      last_name: this.lastName,
      phone_number: this.phoneNumber,
      email: this.email,
      links: this.links.map((link) => link.toJson()),
      sections: this.sections.map((section) => section.toJson()),
    };
  }

  private _generateLinksForLaTeX(): string {
    return this.links.map((link) => `\\resumeLink{${link.url}}{${link.title}}`).join(' ');
  }

  toLaTeX(): string {
    const header = `\\resumeHeader{${this.fullName}}{${this.phoneNumber}}{${this.email}}`;
    const links = this.links.filter((link) => link.isChecked).map((link) => `\\resumeLink{${link.url}}{${link.title}}`).join('');
    const headerEnd = '\\resumeHeaderEnd';
    const sections = this.sections.filter((section) => section.isChecked).map((section) => section.toLaTeX()).join('');

    return `${header}${links}${headerEnd}${sections}`;
  }
}
