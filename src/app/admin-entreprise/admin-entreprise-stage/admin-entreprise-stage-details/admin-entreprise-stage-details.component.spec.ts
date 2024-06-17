import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntrepriseStageDetailsComponent } from './admin-entreprise-stage-details.component';

describe('AdminEntrepriseStageDetailsComponent', () => {
  let component: AdminEntrepriseStageDetailsComponent;
  let fixture: ComponentFixture<AdminEntrepriseStageDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEntrepriseStageDetailsComponent]
    });
    fixture = TestBed.createComponent(AdminEntrepriseStageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
