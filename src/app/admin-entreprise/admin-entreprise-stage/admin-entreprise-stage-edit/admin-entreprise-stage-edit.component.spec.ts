import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntrepriseStageEditComponent } from './admin-entreprise-stage-edit.component';

describe('AdminEntrepriseStageEditComponent', () => {
  let component: AdminEntrepriseStageEditComponent;
  let fixture: ComponentFixture<AdminEntrepriseStageEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEntrepriseStageEditComponent]
    });
    fixture = TestBed.createComponent(AdminEntrepriseStageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
