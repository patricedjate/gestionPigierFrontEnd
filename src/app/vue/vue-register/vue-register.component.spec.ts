import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueRegisterComponent } from './vue-register.component';

describe('VueRegisterComponent', () => {
  let component: VueRegisterComponent;
  let fixture: ComponentFixture<VueRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VueRegisterComponent]
    });
    fixture = TestBed.createComponent(VueRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
