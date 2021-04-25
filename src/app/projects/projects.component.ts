import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../services/project.service';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../model/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Array<Project> = new Array<Project>();
  constructor(public projectService: ProjectService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    if (this.route.snapshot.params.hasOwnProperty('id')) {
      this.projects = this.projects.filter(project =>
        project.skills.find(skill => skill.id === this.route.snapshot.params.id) !== undefined);
    }
  }
}
