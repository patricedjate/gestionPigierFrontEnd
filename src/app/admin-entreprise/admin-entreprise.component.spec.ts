import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntrepriseComponent } from './admin-entreprise.component';

describe('AdminEntrepriseComponent', () => {
  let component: AdminEntrepriseComponent;
  let fixture: ComponentFixture<AdminEntrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEntrepriseComponent]
    });
    fixture = TestBed.createComponent(AdminEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
