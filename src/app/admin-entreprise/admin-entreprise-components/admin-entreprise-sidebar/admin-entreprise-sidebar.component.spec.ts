import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntrepriseSidebarComponent } from './admin-entreprise-sidebar.component';

describe('AdminEntrepriseSidebarComponent', () => {
  let component: AdminEntrepriseSidebarComponent;
  let fixture: ComponentFixture<AdminEntrepriseSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEntrepriseSidebarComponent]
    });
    fixture = TestBed.createComponent(AdminEntrepriseSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
