import { Component, OnInit, NgZone } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-my-name',
  templateUrl: './my-name.component.html',
  styleUrls: ['./my-name.component.scss']
})
export class MyNameComponent implements OnInit {
  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this._ngZone.runOutsideAngular(() => {
      anime
        .timeline({
          autoplay: true,
          loop: true,
          direction: 'alternate'
        })
        .add({
          targets: 'path#myname-stroke',
          'stroke-width': 1,
          easing: 'easeInQuint',
          duration: 800
        })
        .add({
          targets: 'path#myname-stroke',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInQuint',
          duration: 5000
        });
    });
  }
}
