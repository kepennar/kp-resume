import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-expertises',
  templateUrl: './expertises.component.html',
  styleUrls: ['./expertises.component.scss']
})
export class ExpertisesComponent implements OnInit {
  private expertises = [];

  constructor(private contentService: ContentService) { }
  ngOnInit() {
    this.contentService.getExpertises()
    .then(expertises => this.expertises = expertises);
  }
}
