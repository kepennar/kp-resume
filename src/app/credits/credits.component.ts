import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-credits',
  template: `
    <p>
      Build with <a href="https://angular.io">Angular</a>&nbsp;-&nbsp;
    </p>
    <p>
      Content provided with <a href="https://www.contentful.com">Contentful</a>&nbsp;-&nbsp;
    </p>
    <p>
      Source code on <a href="https://github.com/kepennar/kp-resume">Github</a>
    </p>
  `,
  styleUrls: ['./credits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditsComponent {}
