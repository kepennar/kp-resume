import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContentService } from '../content.service';

@Component({
  selector: 'app-expertises',
  template: `
    <h3 class="expert">Expertises</h3>
    <app-expertise
      *ngFor="let expertise of expertises | async" [expertise]="expertise"
      fxLayoutAlign="center top" fxLayoutAlign.xs="start stretch" fxFlex="100" fxFlexFill="100"
    >
    </app-expertise>
  `,
  styleUrls: ['./expertises.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpertisesComponent implements OnInit {
  public expertises: Observable<any>;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.expertises = this.contentService.getExpertises();
  }
}
