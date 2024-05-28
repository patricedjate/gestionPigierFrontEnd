import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEtudiantHeaderComponent } from './admin-etudiant-header.component';

describe('AdminEtudiantHeaderComponent', () => {
  let component: AdminEtudiantHeaderComponent;
  let fixture: ComponentFixture<AdminEtudiantHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEtudiantHeaderComponent]
    });
    fixture = TestBed.createComponent(AdminEtudiantHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
