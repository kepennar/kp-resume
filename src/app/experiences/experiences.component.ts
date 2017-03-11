import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  private experiences = [];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getExperiences()
    .then(experiences => this.experiences = experiences);
  }


}
