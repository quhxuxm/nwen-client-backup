import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nwen-seperator',
  templateUrl: './seperator.component.html',
  styleUrls: ['./seperator.component.scss']
})
export class SeperatorComponent implements OnInit {
  @Input()
  showLeftBorder: boolean;
  @Input()
  showRightBorder: boolean;
  @Input()
  showContent: boolean;

  constructor() {
    this.showLeftBorder = true;
    this.showRightBorder = true;
    this.showContent = false;
  }

  ngOnInit() {
  }
}
