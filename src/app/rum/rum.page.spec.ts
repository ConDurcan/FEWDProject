import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RumPage } from './rum.page';

describe('RumPage', () => {
  let component: RumPage;
  let fixture: ComponentFixture<RumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
