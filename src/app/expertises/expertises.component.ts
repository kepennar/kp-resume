import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContentService } from '../content.service';

@Component({
  selector: 'app-expertises',
  templateUrl: './expertises.component.html',
  styleUrls: ['./expertises.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpertisesComponent implements OnInit {
  private expertises: Observable<any>;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.expertises = this.contentService.getExpertises();
  }
}
