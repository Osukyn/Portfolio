import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'project/:id', component: ProjectCardComponent },
  { path: 'projects/:id', component: ProjectsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
