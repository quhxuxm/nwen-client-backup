import {BreakpointObserver} from '@angular/cdk/layout';
import {Component, ViewChild} from '@angular/core';
import {SecondaryTopNavigatorComponent} from './secondary-top-navigator/secondary-top-navigator.component';

@Component({
  selector: 'nwen-navigator-container',
  templateUrl: './navigator-container.component.html',
  styleUrls: ['./navigator-container.component.scss'],
})
export class NavigatorContainerComponent {
  @ViewChild(SecondaryTopNavigatorComponent)
  secondaryTopNavigator: SecondaryTopNavigatorComponent;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  onToggleSecondaryTopNavigatorEvent(): void {
    this.secondaryTopNavigator.toggleDisplay();
  }
}
