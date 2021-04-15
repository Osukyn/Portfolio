import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public projectService: ProjectService) { }

  ngOnInit(): void {
  }

}
