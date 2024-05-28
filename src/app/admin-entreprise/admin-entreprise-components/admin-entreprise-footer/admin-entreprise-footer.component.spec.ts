import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntrepriseFooterComponent } from './admin-entreprise-footer.component';

describe('AdminEntrepriseFooterComponent', () => {
  let component: AdminEntrepriseFooterComponent;
  let fixture: ComponentFixture<AdminEntrepriseFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEntrepriseFooterComponent]
    });
    fixture = TestBed.createComponent(AdminEntrepriseFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
