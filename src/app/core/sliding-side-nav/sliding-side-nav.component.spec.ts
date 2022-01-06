import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingSideNavComponent } from './sliding-side-nav.component';

describe('SlidingSideNavComponent', () => {
  let component: SlidingSideNavComponent;
  let fixture: ComponentFixture<SlidingSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
