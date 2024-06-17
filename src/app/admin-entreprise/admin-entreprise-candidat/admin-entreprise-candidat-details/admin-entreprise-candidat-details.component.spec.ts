import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntrepriseCandidatDetailsComponent } from './admin-entreprise-candidat-details.component';

describe('AdminEntrepriseCandidatDetailsComponent', () => {
  let component: AdminEntrepriseCandidatDetailsComponent;
  let fixture: ComponentFixture<AdminEntrepriseCandidatDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEntrepriseCandidatDetailsComponent]
    });
    fixture = TestBed.createComponent(AdminEntrepriseCandidatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
