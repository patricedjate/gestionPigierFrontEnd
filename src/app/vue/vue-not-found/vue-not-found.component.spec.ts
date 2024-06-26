import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueNotFoundComponent } from './vue-not-found.component';

describe('VueNotFoundComponent', () => {
  let component: VueNotFoundComponent;
  let fixture: ComponentFixture<VueNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VueNotFoundComponent]
    });
    fixture = TestBed.createComponent(VueNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
