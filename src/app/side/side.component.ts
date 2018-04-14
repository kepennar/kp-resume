import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side',
  template: `
    <div class="side">
      <h2>Resume</h2>
      <app-expertises></app-expertises>
      <app-trainings></app-trainings>
    </div>
    <ng-content></ng-content>
  `,
  styleUrls: ['./side.scss']
})
export class SideComponent {}
