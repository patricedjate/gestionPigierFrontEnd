import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEtudiantStageComponent } from './admin-etudiant-stage.component';

describe('AdminEtudiantStageComponent', () => {
  let component: AdminEtudiantStageComponent;
  let fixture: ComponentFixture<AdminEtudiantStageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEtudiantStageComponent]
    });
    fixture = TestBed.createComponent(AdminEtudiantStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
