import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div fxLayout="row" fxLayout.xs="column" fxFill>
    <div class="side"  >
      <h2>Resume</h2>
      <app-expertises
        fxLayout="column"
        fxLayout.xs="row"
        fxLayoutAlign="center top"
        fxLayoutAlign.xs="center center"
      ></app-expertises>
      <app-trainings
        fxLayout="column"
        fxLayout.xs="row"
        fxLayoutAlign="center top"
        fxLayoutAlign.xs="center center"
      ></app-trainings>
    </div>
    <div class="main" fxFlex="80" fxLayout="column" fxLayoutAlign="top top">
      <div class="content">
        <app-my-name></app-my-name>
        <app-experiences></app-experiences>
        <app-credits
          fxLayout="row"
          fxLayoutAlign="center bottom"
        >
        </app-credits>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kevin Pennarun';
  subtitle = 'Resume';
}
