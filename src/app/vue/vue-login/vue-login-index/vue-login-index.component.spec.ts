import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueLoginIndexComponent } from './vue-login-index.component';

describe('VueLoginIndexComponent', () => {
  let component: VueLoginIndexComponent;
  let fixture: ComponentFixture<VueLoginIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VueLoginIndexComponent]
    });
    fixture = TestBed.createComponent(VueLoginIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
