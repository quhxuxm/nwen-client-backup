import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nwen-secondary-top-navigator',
  templateUrl: './secondary-top-navigator.component.html',
  styleUrls: ['./secondary-top-navigator.component.scss']
})
export class SecondaryTopNavigatorComponent implements OnInit {
  display: boolean | null;
  displaySearchBox: boolean;

  constructor() {
    this.display = null;
    this.displaySearchBox = false;
  }

  ngOnInit() {
  }

  toggleDisplay(): void {
    this.display = !this.display;
  }

  toggleDisplaySearchBox(): void {
    this.displaySearchBox = !this.displaySearchBox;
  }
}
