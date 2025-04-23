import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TequilaPage } from './tequila.page';

describe('TequilaPage', () => {
  let component: TequilaPage;
  let fixture: ComponentFixture<TequilaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TequilaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
