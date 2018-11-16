import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nwen-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
  @Input()
  name: string;

  constructor() {
  }

  ngOnInit() {
  }
}
