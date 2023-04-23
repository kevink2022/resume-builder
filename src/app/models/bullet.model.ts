// bullet.model.ts

import { Checkable } from './checkable.model';

export class Bullet extends Checkable {
  content: string;

  constructor(content: string) {
    super();
    this.content = content;
  }

  static fromJson(json: any): Bullet {
    return new Bullet(json.content);
  }

  toJson(): any {
    return {
      content: this.content,
    };
  }

  toLaTeX(): string {
    return `\\resumeBullet{${this.content}}`;
  }
}
