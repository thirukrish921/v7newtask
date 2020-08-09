import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedadminComponent } from './addedadmin.component';

describe('AddedadminComponent', () => {
  let component: AddedadminComponent;
  let fixture: ComponentFixture<AddedadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
