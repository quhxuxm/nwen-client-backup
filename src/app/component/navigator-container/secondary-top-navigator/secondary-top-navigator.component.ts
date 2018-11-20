import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nwen-secondary-top-navigator',
  templateUrl: './secondary-top-navigator.component.html',
  styleUrls: ['./secondary-top-navigator.component.scss']
})
export class SecondaryTopNavigatorComponent implements OnInit {
  display: boolean;

  constructor() {
    this.display = false;
  }

  ngOnInit() {
  }

  toggleDisplay(): void {
    this.display = !this.display;
  }
}
