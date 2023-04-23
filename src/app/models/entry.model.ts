// component.model.ts

import { Checkable } from './checkable.model';
import { Bullet } from './bullet.model';

export abstract class Entry implements Checkable {
  isChecked: boolean = false;

  constructor(public title: string, public bullets: Bullet[]) {}

  static fromJson(json: any): Entry {
    throw new Error('fromJson() is not implemented for the base class');
  }

  abstract toJson(): any;

  abstract toLaTeX(): string;
}