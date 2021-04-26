import { Component } from '@angular/core';
import {ProjectService} from '../services/project.service';
import {SkillService} from '../services/skill.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public projectService: ProjectService, public skillService: SkillService) { }
}
