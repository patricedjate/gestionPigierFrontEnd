import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntrepriseCandidatIndexComponent } from './admin-entreprise-candidat-index.component';

describe('AdminEntrepriseCandidatIndexComponent', () => {
  let component: AdminEntrepriseCandidatIndexComponent;
  let fixture: ComponentFixture<AdminEntrepriseCandidatIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEntrepriseCandidatIndexComponent]
    });
    fixture = TestBed.createComponent(AdminEntrepriseCandidatIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
