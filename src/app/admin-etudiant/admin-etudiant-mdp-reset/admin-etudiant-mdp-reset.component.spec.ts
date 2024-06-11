import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEtudiantMdpResetComponent } from './admin-etudiant-mdp-reset.component';

describe('AdminEtudiantMdpResetComponent', () => {
  let component: AdminEtudiantMdpResetComponent;
  let fixture: ComponentFixture<AdminEtudiantMdpResetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEtudiantMdpResetComponent]
    });
    fixture = TestBed.createComponent(AdminEtudiantMdpResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
