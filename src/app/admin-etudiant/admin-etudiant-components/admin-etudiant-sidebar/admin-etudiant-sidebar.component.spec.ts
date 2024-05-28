import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEtudiantSidebarComponent } from './admin-etudiant-sidebar.component';

describe('AdminEtudiantSidebarComponent', () => {
  let component: AdminEtudiantSidebarComponent;
  let fixture: ComponentFixture<AdminEtudiantSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEtudiantSidebarComponent]
    });
    fixture = TestBed.createComponent(AdminEtudiantSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
