import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContentService } from '../content.service';

@Component({
  selector: 'app-expertises',
  templateUrl: './expertises.component.html',
  styleUrls: ['./expertises.component.scss']
})
export class ExpertisesComponent implements OnInit {
  private expertises: Observable<any>;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.expertises = this.contentService.getExpertises();
  }
}
