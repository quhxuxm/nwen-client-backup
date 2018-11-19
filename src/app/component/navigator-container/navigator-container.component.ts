import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'nwen-navigator-container',
  templateUrl: './navigator-container.component.html',
  styleUrls: ['./navigator-container.component.scss'],
})
export class NavigatorContainerComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  showSecondaryTopNavigator: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.showSecondaryTopNavigator = false;
  }

  toggleSecondaryTopNavigator() {
    if (this.showSecondaryTopNavigator) {
      this.showSecondaryTopNavigator = false;
    } else {
      this.showSecondaryTopNavigator = true;
    }
  }
}
