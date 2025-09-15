import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from "../contact/contact.component";
import { PortfolioMiniComponent } from "../portfolio-mini/portfolio-mini.component";
import { SkillsComponent } from "../skills/skills.component";
import { QuestionComponent } from "../question/question.component";
import { WorkProccessComponent } from "../work-proccess/work-proccess.component";

@Component({
  selector: 'app-main',
  imports: [RouterModule, ContactComponent, PortfolioMiniComponent, SkillsComponent, QuestionComponent, WorkProccessComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {

}
