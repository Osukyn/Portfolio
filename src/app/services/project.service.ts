import { Injectable } from '@angular/core';
import {Project} from '../model/project.model';
import {Article} from '../model/article.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Array<Project> = new Array<Project>();
  constructor() {
    this.projects.push(new Project('Heaven Stats', 'Progressive Web App expérimentale qui permet aux utilisateurs de consulter leurs statistiques sur les serveurs Heaven du jeu SCP: Secret Laboratory',
      new Article([{titre: 'Projet de BAC', content: `Ce projet était mon projet de bac, j'ai eu l'occasion de m'initier au langage Java et à L'IDE Android Studio`}])));
    this.projects.push(new Project('BlueAmp', 'BlueAmp était mon projet de terminal STI2D, c\'est un ampli audio contrôlé par Bluetooth via une application sur un smartphone.', new Article([{content: ''}])));
    this.projects.push(new Project('RDC Stocks', 'Progressive Web App permettant aux utilisateurs de recevoir des notifications lors de la remise en stock de cartes graphiques.', new Article([{content: ''}])));
  }
  public getProjects(limit?: number): Array<Project> {
    if (limit && limit <= this.projects.length && limit > 0) {
      return this.projects.slice(0, limit);
    } else {
      return this.projects;
    }
  }
}
