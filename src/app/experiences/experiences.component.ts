import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContentService } from '../content.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  private experiences: Observable<any>;
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.experiences = this.contentService.getExperiences()
  }


}
