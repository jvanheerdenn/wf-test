import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuNavbarComponent } from './left-menu-navbar.component';

describe('LeftMenuNavbarComponent', () => {
  let component: LeftMenuNavbarComponent;
  let fixture: ComponentFixture<LeftMenuNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftMenuNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenuNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
