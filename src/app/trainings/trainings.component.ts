import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {
  private trainings = [];
  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getTrainings()
    .then(trainings => this.trainings = trainings);
  }
}
