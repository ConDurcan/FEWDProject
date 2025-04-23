import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrinkDetailsPage } from './drink-details.page';

describe('DrinkDetailsPage', () => {
  let component: DrinkDetailsPage;
  let fixture: ComponentFixture<DrinkDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
