import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-mini',
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio-mini.component.html',
  styleUrl: './portfolio-mini.component.scss',
})
export class PortfolioMiniComponent {
  public wantedProjects: any[] = [
    {
      category: 'Mark-Up',
      date: '2025-02-04',
      description:
        'Ridgeview School project is inspired by WIX Template. I built it for my final exam for HTML & CSS',
      id: 1,
      name: 'Ridgeview School',
      url: 'https://ridgeview-school.netlify.app/',
    },

    {
      category: 'Vanilla JS',
      date: '2025-05-17',
      description:
        'This train station website was built for the final exam for JS. I was working on it a long time and always was looking for something to improve.',
      id: 3,
      name: 'Train Station',
      url: 'https://step-railway.netlify.app/',
    },

    {
      category: 'Angular',
      date: '2025-06-20',
      description:
        'This project was for the final exam of Angular, spent a lot of time and energy but was worth every bit.',
      id: 5,
      name: 'Online Shop',
      url: 'https://steponline-shop.netlify.app/',
    },
  ];
}
