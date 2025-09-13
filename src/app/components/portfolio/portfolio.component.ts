import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  public projects: any;
  public wantedProjects: any;
  public chosenCategory: string = 'all';

  constructor(private http: HttpClient) {
    this.getProjects();
  }

  getProjects() {
    this.http
      .get('https://my-json-server.typicode.com/NikaKvaratskhelia/DataBase/db')
      .subscribe({
        next: (data: any) => {
          this.projects = data;
          this.wantedProjects = data.projects;
          console.log(this.projects);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  chooseCategory(category: string) {
    this.chosenCategory = category;
    if (category === 'all') {
      this.wantedProjects = this.projects.projects;
    } else {
      const normalize = (str: string) =>
        str.replace(/[-\s]/g, '').toLowerCase();

      this.wantedProjects = this.projects.projects.filter(
        (p: any) => normalize(p.category) === normalize(category)
      );
    }
  }
}
