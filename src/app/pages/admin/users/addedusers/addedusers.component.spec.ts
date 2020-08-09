import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedusersComponent } from './addedusers.component';

describe('AddedusersComponent', () => {
  let component: AddedusersComponent;
  let fixture: ComponentFixture<AddedusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
