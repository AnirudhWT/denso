import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProcessStepComponent } from './upload-process-step.component';

describe('UploadProcessStepComponent', () => {
  let component: UploadProcessStepComponent;
  let fixture: ComponentFixture<UploadProcessStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadProcessStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProcessStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
