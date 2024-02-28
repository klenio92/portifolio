import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, MainComponent, FooterComponent, ProjectsComponent,
     AboutComponent, RouterOutlet, RouterLink],
  selector: 'portifolio-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portifolio';
}
