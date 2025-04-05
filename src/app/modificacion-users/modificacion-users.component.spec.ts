import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionUsersComponent } from './modificacion-users.component';

describe('ModificacionUsersComponent', () => {
  let component: ModificacionUsersComponent;
  let fixture: ComponentFixture<ModificacionUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificacionUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificacionUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
