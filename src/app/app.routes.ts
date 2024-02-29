import { Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

export const appRoutes: Route[] = [
    {
        path: 'about',
        title: 'Sobre Klenio',
        component: AboutComponent
    },
    {
        path: 'projects',
        title:'Meus Projetos',
        component: ProjectsComponent
    },
];
