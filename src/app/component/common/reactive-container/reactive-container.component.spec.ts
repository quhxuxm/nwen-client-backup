import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveContainerComponent } from './reactive-container.component';

describe('ReactiveContainerComponent', () => {
  let component: ReactiveContainerComponent;
  let fixture: ComponentFixture<ReactiveContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
