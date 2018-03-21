import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContentService } from '../content.service';

@Component({
  selector: 'app-trainings',
  template: `
  <h3 class="trainer">Formateur</h3>

  <div fxLayout="column" fxLayoutAlign="center top" fxFlex="100">
    <div>
      <app-tech
        *ngFor="let training of trainings | async"
        [tech]="training"
      >
      </app-tech>
    </div>
  </div>
  `,
  styleUrls: ['./trainings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingsComponent implements OnInit {
  public trainings: Observable<any>;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.trainings = this.contentService.getTrainings();
  }
}
