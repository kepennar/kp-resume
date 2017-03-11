import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-my-name',
  templateUrl: './my-name.component.html',
  styleUrls: ['./my-name.component.scss']
})
export class MyNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const timeline =  anime.timeline({ autoplay: true });
    timeline.add({
      targets: 'path#myname-stroke',
      'stroke-width': 2,
      easing: 'easeInQuint',
      duration: 800,
    })
    .add({
      targets: 'path#myname-stroke',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInQuint',
      duration: 5000,
    })
    .add({
        targets: 'path#myname-fill',
        opacity: .8,
        duration: 2000,
        offset: '-=1000'
    })
    .add({
        targets: 'path#myname-stroke',
        'stroke-width': 0,
        duration: 1000,
        easing: 'easeOutSine',
        offset: '-=1000'
    });
  }

}
