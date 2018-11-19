import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryTopNavigatorComponent } from './primary-top-navigator.component';

describe('PrimaryTopNavigatorComponent', () => {
  let component: PrimaryTopNavigatorComponent;
  let fixture: ComponentFixture<PrimaryTopNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryTopNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryTopNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
