import {Article} from './article.model';
import {Skill} from './skill.model';

export class Project {
  get id(): string {
    return this.name.toLowerCase().replace(' ', '-');
  }
  name: string;
  description: string;
  article: Article;
  get route(): string {
    return `/project&id=${this.id}`;
  }
  get image(): string {
    return `assets/img/projects/${this.id}.jpg`;
  }
  skills: Array<Skill>;
  constructor(name: string, description: string, article: Article, skills?: Array<Skill>) {
    this.name = name;
    this.description = description;
    this.article = article;
  }
}
