export class Skill {
  get id(): string {
    return this.name.toLowerCase().split(' ').join('').replace('.', '');
  }
  name: string;
  skillType: SkillEnum;
  get image(): string {
    return `assets/img/skills/${this.id}-logo.svg`;
  }
  constructor(name: string, skillType: SkillEnum) {
    this.name = name;
    this.skillType = skillType;
  }
}

export class SkillType {
  name: string;
  skills: Array<Skill> = new Array<Skill>();
  constructor(name: string, skills: Array<Skill>) {
    this.name = name;
    this.skills = skills;
  }
}

export enum SkillEnum {
  DEVWEB,
  DEVSOFT,
  IDE,
  VCS,
  ADMINSYS,
  MULTI
}
