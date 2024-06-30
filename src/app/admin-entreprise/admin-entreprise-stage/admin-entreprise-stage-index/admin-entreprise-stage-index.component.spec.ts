import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntrepriseStageIndexComponent } from './admin-entreprise-stage-index.component';

describe('AdminEntrepriseStageIndexComponent', () => {
  let component: AdminEntrepriseStageIndexComponent;
  let fixture: ComponentFixture<AdminEntrepriseStageIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEntrepriseStageIndexComponent]
    });
    fixture = TestBed.createComponent(AdminEntrepriseStageIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
