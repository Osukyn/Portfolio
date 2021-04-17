import {Article} from './article.model';

export class Project {
  get id(): string {
    return this.name.toLowerCase().replace(' ', '-');
  }
  name: string;
  description: string;
  article: Article;
  get route(): string {
    return `/project/${this.id}`;
  }
  get image(): string {
    return `assets/img/projects/${this.id}.jpg`;
  }
  constructor(name: string, description: string, article?: Article) {
    this.name = name;
    this.description = description;
    this.article = article;
  }
}
