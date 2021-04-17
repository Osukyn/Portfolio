export class Article {
  resources: Array<Section>;
  constructor(resources: Array<Section>) {
    this.resources = resources;
  }
}

export interface Section {
  titre?: string;
  content: string;
  image?: string;
}
