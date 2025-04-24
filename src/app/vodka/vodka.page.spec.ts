import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VodkaPage } from './vodka.page';

describe('VodkaPage', () => {
  let component: VodkaPage;
  let fixture: ComponentFixture<VodkaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VodkaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
