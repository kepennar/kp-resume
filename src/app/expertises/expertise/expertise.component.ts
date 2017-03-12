import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})
export class ExpertiseComponent {
  @Input() expertise;

}
