import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueMdpForgetResetComponent } from './vue-mdp-forget-reset.component';

describe('VueMdpForgetResetComponent', () => {
  let component: VueMdpForgetResetComponent;
  let fixture: ComponentFixture<VueMdpForgetResetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VueMdpForgetResetComponent]
    });
    fixture = TestBed.createComponent(VueMdpForgetResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
