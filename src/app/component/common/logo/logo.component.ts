import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nwen-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input()
  href: string;

  constructor() {
  }

  ngOnInit() {
  }
}
