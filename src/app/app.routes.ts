import { Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MainComponent } from './components/main/main.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CertificationsComponent } from './components/certifications/certifications.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'aboutMe',
    component: AboutMeComponent,
  },
  {
    path: 'certifications',
    component: CertificationsComponent,
  }
];
