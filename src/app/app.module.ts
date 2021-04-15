import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
  { path: 'project/:id', component: ProjectsComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    HomeComponent,
    ProjectsComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
