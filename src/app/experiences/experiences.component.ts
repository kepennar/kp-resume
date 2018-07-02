import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { ContentService } from '../content.service';

@Component({
  selector: 'app-experiences',
  template: `
    <app-experience
      *ngFor="let experience of experiences | async; let first = first"
      [experience]="experience"
      [lastExperience]="first"
    >
    </app-experience>
  `,
  styleUrls: ['./experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesComponent implements OnInit {
  public experiences: Observable<any>;
  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.experiences = this.contentService.getExperiences();
  }
}
