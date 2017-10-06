import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { %= projectNameCamelCase %>Component } from './<%= projectName %>.component';

describe('<%= projectNameCamelCase %>ComponentComponent', () => {
  let component: Ng4BpmComponent;
  let fixture: ComponentFixture<<%= projectNameCamelCase %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= projectNameCamelCase %>Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= projectNameCamelCase %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
