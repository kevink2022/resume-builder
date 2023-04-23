// link.model.ts

import { Checkable } from './checkable.model';

export class Link extends Checkable {
  constructor(
    public url: string,
    public title: string,
    public imageFile?: string,
  ) {
    super();
  }

  static fromJson(json: any): Link {
    return new Link(json.url, json.title, json.image_file);
  }

  toJson(): any {
    return {
      url: this.url,
      title: this.title,
      image_file: this.imageFile,
    };
  }
}
