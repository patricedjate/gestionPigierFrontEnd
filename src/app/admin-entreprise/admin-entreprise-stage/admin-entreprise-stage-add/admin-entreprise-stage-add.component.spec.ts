import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntrepriseStageAddComponent } from './admin-entreprise-stage-add.component';

describe('AdminEntrepriseStageAddComponent', () => {
  let component: AdminEntrepriseStageAddComponent;
  let fixture: ComponentFixture<AdminEntrepriseStageAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEntrepriseStageAddComponent]
    });
    fixture = TestBed.createComponent(AdminEntrepriseStageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
