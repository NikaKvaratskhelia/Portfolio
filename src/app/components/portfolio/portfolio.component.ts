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
  public isLoading: boolean = false;

  constructor(private http: HttpClient) {
    this.isLoading = true;
    this.getProjects();
  }

  getProjects() {
    console.log(this.isLoading);

    this.http
      .get('https://my-json-server.typicode.com/NikaKvaratskhelia/DataBase/db')
      .subscribe({
        next: (data: any) => {
          this.projects = data;
          this.wantedProjects = data.projects;
            this.isLoading = false;
          console.log(this.projects);
          console.log(this.isLoading);
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
