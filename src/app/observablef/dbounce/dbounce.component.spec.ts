import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbounceComponent } from './dbounce.component';

describe('DbounceComponent', () => {
  let component: DbounceComponent;
  let fixture: ComponentFixture<DbounceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbounceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
