import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundImageSectionComponent } from './background-image-section.component';

describe('BackgroundImageSectionComponent', () => {
  let component: BackgroundImageSectionComponent;
  let fixture: ComponentFixture<BackgroundImageSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundImageSectionComponent]
    });
    fixture = TestBed.createComponent(BackgroundImageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
