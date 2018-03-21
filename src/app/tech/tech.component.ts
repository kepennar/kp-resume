import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tech',
  template: `
    <span>
      <img *ngIf="tech.icon" width="30" class="logo" src="assets/{{tech.icon}}" />
      {{tech.name}}
    </span>
  `,
  styleUrls: ['./tech.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechComponent {
  @Input() tech;
}
