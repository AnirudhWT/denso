import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMachineDocComponent } from './add-new-machine-doc.component';

describe('AddNewMachineDocComponent', () => {
  let component: AddNewMachineDocComponent;
  let fixture: ComponentFixture<AddNewMachineDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewMachineDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMachineDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
