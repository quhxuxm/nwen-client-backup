import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SecondaryTopNavigatorComponent} from './secondary-top-navigator/secondary-top-navigator.component';

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
  @ViewChild(SecondaryTopNavigatorComponent)
  secondaryTopNavigator: SecondaryTopNavigatorComponent;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  onToggleSecondaryTopNavigatorEvent(): void {
    this.secondaryTopNavigator.toggleDisplay();
  }
}
