import {Injectable} from '@angular/core';
import {Skill, SkillEnum, SkillType} from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private skillTypes: Array<SkillType> = new Array<SkillType>();
  constructor() {
    let tempArray = new Array<Skill>();
    tempArray.push(new Skill('Angular', SkillEnum.DEVWEB));
    tempArray.push(new Skill('Node.js', SkillEnum.DEVWEB));
    tempArray.push(new Skill('TypeScript', SkillEnum.DEVWEB));
    tempArray.push(new Skill('JavaScript', SkillEnum.DEVWEB));
    tempArray.push(new Skill('HTML', SkillEnum.DEVWEB));
    tempArray.push(new Skill('CSS', SkillEnum.DEVWEB));
    tempArray.push(new Skill('PHP', SkillEnum.DEVWEB));
    this.skillTypes.push(new SkillType('Développement Web', tempArray));

    tempArray = new Array<Skill>();
    tempArray.push(new Skill('Java', SkillEnum.DEVSOFT));
    tempArray.push(new Skill('C', SkillEnum.DEVSOFT));
    tempArray.push(new Skill('Python', SkillEnum.DEVSOFT));
    this.skillTypes.push(new SkillType('Développement logiciel', tempArray));

    tempArray = new Array<Skill>();
    tempArray.push(new Skill('DataGrip', SkillEnum.IDE));
    tempArray.push(new Skill('IntelliJ IDEA', SkillEnum.IDE));
    tempArray.push(new Skill('PhpStorm', SkillEnum.IDE));
    tempArray.push(new Skill('PyCharm', SkillEnum.IDE));
    tempArray.push(new Skill('WebStorm', SkillEnum.IDE));
    tempArray.push(new Skill('Android Studio', SkillEnum.IDE));
    tempArray.push(new Skill('Visual Studio Code', SkillEnum.IDE));
    tempArray.push(new Skill('Eclipse', SkillEnum.IDE));
    tempArray.push(new Skill('Netbeans', SkillEnum.IDE));
    tempArray.push(new Skill('Arduino IDE', SkillEnum.IDE));
    this.skillTypes.push(new SkillType('IDE', tempArray));

    tempArray = new Array<Skill>();
    tempArray.push(new Skill('Git', SkillEnum.VCS));
    tempArray.push(new Skill('GitHub', SkillEnum.VCS));
    tempArray.push(new Skill('GitLab', SkillEnum.VCS));
    tempArray.push(new Skill('GitKraken', SkillEnum.VCS));
    this.skillTypes.push(new SkillType('Gestion de Version', tempArray));

    tempArray = new Array<Skill>();
    tempArray.push(new Skill('Proxmox VE', SkillEnum.ADMINSYS));
    tempArray.push(new Skill('Debian', SkillEnum.ADMINSYS));
    tempArray.push(new Skill('Ubuntu', SkillEnum.ADMINSYS));
    tempArray.push(new Skill('Nginx', SkillEnum.ADMINSYS));
    this.skillTypes.push(new SkillType('Administration Système', tempArray));

    tempArray = new Array<Skill>();
    tempArray.push(new Skill('Office', SkillEnum.MULTI));
    tempArray.push(new Skill('Photoshop', SkillEnum.MULTI));
    tempArray.push(new Skill('Premiere Pro', SkillEnum.MULTI));
    tempArray.push(new Skill('SolidWorks', SkillEnum.MULTI));
    this.skillTypes.push(new SkillType('Multimédia', tempArray));
  }
  public getSkillTypes(): Array<SkillType> {
    return this.skillTypes;
  }
}
