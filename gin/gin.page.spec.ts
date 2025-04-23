import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GinPage } from './gin.page';

describe('GinPage', () => {
  let component: GinPage;
  let fixture: ComponentFixture<GinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
