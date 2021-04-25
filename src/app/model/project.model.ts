import {Article} from './article.model';
import {Skill} from './skill.model';

export class Project {
  get id(): string {
    return this.name.toLowerCase().split(' ').join('-');
  }
  name: string;
  description: string;
  article: Article;
  navalgroup = false;
  get route(): string {
    return `/project/${this.id}`;
  }
  get image(): string {
    return `assets/img/projects/${this.navalgroup ? 'navalgroup' : this.id}.jpg`;
  }
  skills: Array<Skill>;
  constructor(name: string, description: string, article: Article, skills?: Array<Skill>, navalgroup?: boolean) {
    this.name = name;
    this.description = description;
    this.article = article;
    if (skills) {
      this.skills = skills;
    }
    this.navalgroup = navalgroup !== undefined ? navalgroup : this.navalgroup;
  }
}
