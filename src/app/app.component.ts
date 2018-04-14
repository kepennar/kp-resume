import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-side>
    <div class="main" >
      <div class="content">
        <app-my-name></app-my-name>
        <app-experiences></app-experiences>
        <app-credits></app-credits>
      </div>
    </div>
    </app-side>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kevin Pennarun';
  subtitle = 'Resume';
}
