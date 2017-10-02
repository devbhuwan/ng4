import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng4CoreComponent } from './ng4-core.component';

describe('Ng4CoreComponent', () => {
  let component: Ng4CoreComponent;
  let fixture: ComponentFixture<Ng4CoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng4CoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng4CoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
