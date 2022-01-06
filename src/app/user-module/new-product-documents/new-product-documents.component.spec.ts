import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductDocumentsComponent } from './new-product-documents.component';

describe('NewProductDocumentsComponent', () => {
  let component: NewProductDocumentsComponent;
  let fixture: ComponentFixture<NewProductDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProductDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
