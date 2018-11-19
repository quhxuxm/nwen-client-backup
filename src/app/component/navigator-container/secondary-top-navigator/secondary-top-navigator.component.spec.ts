import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryTopNavigatorComponent } from './secondary-top-navigator.component';

describe('SecondaryTopNavigatorComponent', () => {
  let component: SecondaryTopNavigatorComponent;
  let fixture: ComponentFixture<SecondaryTopNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryTopNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryTopNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
