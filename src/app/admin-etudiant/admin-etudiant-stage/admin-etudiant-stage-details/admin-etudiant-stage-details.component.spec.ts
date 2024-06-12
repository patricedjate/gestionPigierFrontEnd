import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEtudiantStageDetailsComponent } from './admin-etudiant-stage-details.component';

describe('AdminEtudiantStageDetailsComponent', () => {
  let component: AdminEtudiantStageDetailsComponent;
  let fixture: ComponentFixture<AdminEtudiantStageDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEtudiantStageDetailsComponent]
    });
    fixture = TestBed.createComponent(AdminEtudiantStageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
