import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueLoginComponent } from './vue-login.component';

describe('VueLoginComponent', () => {
  let component: VueLoginComponent;
  let fixture: ComponentFixture<VueLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VueLoginComponent]
    });
    fixture = TestBed.createComponent(VueLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
