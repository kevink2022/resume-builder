// project.model.ts

import { Bullet } from './bullet.model';
import { Entry } from './entry.model';

export class Project extends Entry {
  constructor(
    title: string,
    public startDate: string,
    public endDate: string,
    public skills: Bullet[],
    bullets: Bullet[]
  ) {
    super(title, bullets);
  }

  static isProject(obj: any): obj is Project {
    return obj instanceof Project;
  }

  static override fromJson(json: any): Project {
    return new Project(
      json.title,
      json.startDate,
      json.endDate,
      json.skills.map((bulletJson: any) => Bullet.fromJson(bulletJson)),
      json.bullets.map((bulletJson: any) => Bullet.fromJson(bulletJson)),
    );
  }

  toJson(): any {
    return {
      title: this.title,
      startDate: this.startDate,
      endDate: this.endDate,
      skills: this.skills.map((bullet) => bullet.toJson()),
      bullets: this.bullets.map((bullet) => bullet.toJson()),
    };
  }

  toLaTeX(): string {
    const checkedBullets = this.bullets.filter((bullet) => bullet.isChecked);
    const bulletLaTeX = checkedBullets.map((bullet) => bullet.toLaTeX()).join('\n');
    
    const checkedSkills = this.skills.filter((bullet) => bullet.isChecked);
    const skillsLaTeX = checkedSkills.map((bullet) => bullet.toLaTeX()).join('\n');

    return `
\\resumeProject
    {\\textbf{${this.title}} 
    \\resumeSkillsListStart
        ${skillsLaTeX}
    \\resumeSkillsListEnd
    \\resumeBulletListStart
        ${bulletLaTeX}
    \\resumeBulletListEnd
`;
  }

}