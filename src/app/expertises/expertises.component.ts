import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-expertises',
  template: `
    <h3 class="expert">Expertises</h3>
    <app-expertise *ngFor="let expertise of expertises | async"
      [expertise]="expertise"
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
