import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbortonCardComponent } from './jumborton-card.component';

describe('JumbortonCardComponent', () => {
  let component: JumbortonCardComponent;
  let fixture: ComponentFixture<JumbortonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbortonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbortonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
