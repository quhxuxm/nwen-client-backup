import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nwen-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  redirectTo: string;
  iconImage: string;

  constructor() {
  }

  ngOnInit() {
  }
}
