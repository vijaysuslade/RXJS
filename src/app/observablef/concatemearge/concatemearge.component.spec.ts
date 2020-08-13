import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatemeargeComponent } from './concatemearge.component';

describe('ConcatemeargeComponent', () => {
  let component: ConcatemeargeComponent;
  let fixture: ComponentFixture<ConcatemeargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcatemeargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatemeargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
