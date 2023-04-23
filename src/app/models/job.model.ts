// job.model.ts

import { Bullet } from './bullet.model';
import { Entry } from './entry.model';

export class Job extends Entry {
  constructor(
    title: string,
    public startDate: string,
    public endDate: string,
    public employer: string,
    public location: string,
    bullets: Bullet[],
  ) {
    super(title, bullets);
  }

  static isJob(obj: any): obj is Job {
    return obj instanceof Job;
  }

  static override fromJson(json: any): Job {
    return new Job(
      json.title,
      json.startDate,
      json.endDate,
      json.employer,
      json.location,
      json.bullets.map((bulletJson: any) => Bullet.fromJson(bulletJson)),
    );
  }

  toJson(): any {
    return {
      title: this.title,
      startDate: this.startDate,
      endDate: this.endDate,
      employer: this.employer,
      location: this.location,
      bullets: this.bullets.map((bullet) => bullet.toJson()),
    };
  }

  toLaTeX(): string {
    const checkedBullets = this.bullets.filter((bullet) => bullet.isChecked);
    const bulletLaTeX = checkedBullets.map((bullet) => bullet.toLaTeX()).join('\n');

    return `
\\resumeJob
  {${this.title}}{${this.startDate}} -- {${this.endDate}}
  {${this.employer}}{${this.location}}
  \\resumeBulletListStart
    ${bulletLaTeX}
  \\resumeBulletListEnd
`;
  }

}