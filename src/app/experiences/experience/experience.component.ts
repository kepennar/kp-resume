import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-experience',
  template: `
  <div class="container" [ngClass]="{'last-experience': lastExperience}">
    <h2 *ngIf="lastExperience" class="last-exp-label">
      Dernière expérience
    </h2>
    <h3>{{experience.title}}</h3>
    <div class="subtitle">
      <span class="pull-left">{{experience.duration}}</span>
      <span class="pull-right">{{experience.company}} - {{experience.project}}</span>
    </div>
    <div class="details">
      <div class="description">{{experience.description}}</div>
      <ul>
        <li *ngFor="let task of experience.tasks">{{task}}</li>
      </ul>
      <span *ngFor="let techEnv of experience.techEnvs; let isLast = last">
        {{techEnv}} <span *ngIf="!isLast"> &nbsp; / &nbsp;</span>
      </span>
    </div>
  </div>
  `,
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  @Input() experience;
  @Input() lastExperience;
}
