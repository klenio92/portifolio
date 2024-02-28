import { Route } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HeaderComponent
    },
    {
        path: '/main',
        component: MainComponent
    },
    {
        path: '/footer',
        component: FooterComponent
    },
    {
        path: '/about',
        component: AboutComponent
    },
    {
        path: '/projects',
        component: ProjectsComponent
    },
];
