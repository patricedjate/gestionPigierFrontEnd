import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueRegisterIndexComponent } from './vue-register-index.component';

describe('VueRegisterIndexComponent', () => {
  let component: VueRegisterIndexComponent;
  let fixture: ComponentFixture<VueRegisterIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VueRegisterIndexComponent]
    });
    fixture = TestBed.createComponent(VueRegisterIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
