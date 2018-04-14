import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-expertise',
  template: `
  <div >
    <div class="category">
      <h3>{{expertise.category}}</h3>
    </div>
    <div>
      <app-tech
        *ngFor="let tech of expertise.techs"
        [tech]="tech"
      >
      </app-tech>
    </div>
  </div>
  `,
  styleUrls: ['./expertise.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpertiseComponent {
  @Input() expertise;
}
