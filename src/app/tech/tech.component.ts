import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechComponent {
  @Input() tech;

}
