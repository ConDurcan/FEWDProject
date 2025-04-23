import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhiskeyPage } from './whiskey.page';

describe('WhiskeyPage', () => {
  let component: WhiskeyPage;
  let fixture: ComponentFixture<WhiskeyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiskeyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
