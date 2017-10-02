import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng4BpmComponent } from './ng4-bpm.component';

describe('Ng4BpmComponent', () => {
  let component: Ng4BpmComponent;
  let fixture: ComponentFixture<Ng4BpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng4BpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng4BpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
