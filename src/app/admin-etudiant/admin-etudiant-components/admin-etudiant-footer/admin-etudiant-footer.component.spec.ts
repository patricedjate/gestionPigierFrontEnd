import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEtudiantFooterComponent } from './admin-etudiant-footer.component';

describe('AdminEtudiantFooterComponent', () => {
  let component: AdminEtudiantFooterComponent;
  let fixture: ComponentFixture<AdminEtudiantFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEtudiantFooterComponent]
    });
    fixture = TestBed.createComponent(AdminEtudiantFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
