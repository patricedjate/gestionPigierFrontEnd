import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntrepriseDashboardComponent } from './admin-entreprise-dashboard.component';

describe('AdminEntrepriseDashboardComponent', () => {
  let component: AdminEntrepriseDashboardComponent;
  let fixture: ComponentFixture<AdminEntrepriseDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEntrepriseDashboardComponent]
    });
    fixture = TestBed.createComponent(AdminEntrepriseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
