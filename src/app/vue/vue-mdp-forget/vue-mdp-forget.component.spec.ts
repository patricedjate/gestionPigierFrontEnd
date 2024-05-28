import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueMdpForgetComponent } from './vue-mdp-forget.component';

describe('VueMdpForgetComponent', () => {
  let component: VueMdpForgetComponent;
  let fixture: ComponentFixture<VueMdpForgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VueMdpForgetComponent]
    });
    fixture = TestBed.createComponent(VueMdpForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
