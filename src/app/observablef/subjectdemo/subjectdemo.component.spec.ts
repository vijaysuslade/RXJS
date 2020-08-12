import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectdemoComponent } from './subjectdemo.component';

describe('SubjectdemoComponent', () => {
  let component: SubjectdemoComponent;
  let fixture: ComponentFixture<SubjectdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
