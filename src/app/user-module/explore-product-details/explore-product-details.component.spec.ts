import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreProductDetailsComponent } from './explore-product-details.component';

describe('ExploreProductDetailsComponent', () => {
  let component: ExploreProductDetailsComponent;
  let fixture: ComponentFixture<ExploreProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
