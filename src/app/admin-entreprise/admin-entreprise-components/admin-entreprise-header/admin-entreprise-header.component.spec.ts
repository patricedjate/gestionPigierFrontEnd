import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntrepriseHeaderComponent } from './admin-entreprise-header.component';

describe('AdminEntrepriseHeaderComponent', () => {
  let component: AdminEntrepriseHeaderComponent;
  let fixture: ComponentFixture<AdminEntrepriseHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEntrepriseHeaderComponent]
    });
    fixture = TestBed.createComponent(AdminEntrepriseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
