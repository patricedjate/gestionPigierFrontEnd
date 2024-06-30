import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntrepriseProfilComponent } from './admin-entreprise-profil.component';

describe('AdminEntrepriseProfilComponent', () => {
  let component: AdminEntrepriseProfilComponent;
  let fixture: ComponentFixture<AdminEntrepriseProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEntrepriseProfilComponent]
    });
    fixture = TestBed.createComponent(AdminEntrepriseProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
