import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCardContainerComponent } from './reactive-card-container.component';

describe('ReactiveCardContainerComponent', () => {
  let component: ReactiveCardContainerComponent;
  let fixture: ComponentFixture<ReactiveCardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveCardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
