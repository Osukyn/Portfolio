import {Injectable} from '@angular/core';
import {Project} from '../model/project.model';
import {Article} from '../model/article.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Array<Project> = new Array<Project>();

  constructor() {
    this.projects.push(new Project('Heaven Stats', 'Progressive Web App expérimentale qui permet aux utilisateurs de consulter leurs statistiques sur les serveurs Heaven du jeu SCP: Secret Laboratory',
      new Article([{
        titre: 'Projet de BAC',
        content: `Ce projet était mon projet de bac, j'ai eu l'occasion de m'initier au langage Java et à L'IDE Android Studio`
      }])));
    this.projects.push(new Project('BlueAmp', 'BlueAmp était mon projet de terminal STI2D, c\'est un ampli audio contrôlé par Bluetooth via une application sur un smartphone.', new Article([{content: ''}])));
    this.projects.push(new Project('RDC Stocks', 'Progressive Web App permettant aux utilisateurs de recevoir des notifications lors de la remise en stock de cartes graphiques.', new Article([{content: ''}])));
    this.projects.push(new Project('Traçage de navires',
      'Couches QGIS permettant d\'afficher les trajetoires des navires dans le temps selon certaines conditions.',
      new Article([{content: ''}])
    ));
    this.projects.push(new Project('Maison Des Ligues',
      'Application Angular qui gère l\'inscription des licenciés à des ateliers.',
      new Article([{content: ''}])
    ));
    this.projects.push(new Project('GSB',
      'Développement d\'une application web permettant la gestion des visites des visiteurs médicaux par des comptables.',
      new Article([{content: ''}])
    ));
    this.projects.push(new Project('Nolark',
      'Site vitrine commercialisation de casques de motos.',
      new Article([{content: ''}])
    ));
    this.projects.push(new Project('Conversion coordonnées GPS',
      'Module Angular permettant de convertir des coordonnées GPS en plusieurs référentiels différents.',
      new Article([{content: ''}])
    ));
    this.projects.push(new Project('NavalFront',
      'Librairie graphique Angular pour les projets Angular de NavalGroup.',
      new Article([{content: ''}])
    ));
    this.projects.push(new Project('Gestion de simulations tactiques',
      'Amélioration des simulations tactiques introduisant une interface web complète permettant de gèrer des simulations.',
      new Article([{content: ''}])
    ));
    this.projects.push(new Project('Portfolio',
      'Le porfolio sur lequel vous naviguez actuellement, fait en Angular.',
      new Article([{content: ''}])
    ));
  }

  public getProjects(limit?: number): Array<Project> {
    if (limit && limit <= this.projects.length && limit > 0) {
      return this.projects.slice(0, limit);
    } else {
      return this.projects;
    }
  }
}
