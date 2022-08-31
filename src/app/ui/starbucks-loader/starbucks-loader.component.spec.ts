import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarbucksLoaderComponent } from './starbucks-loader.component';

describe('StarbucksLoaderComponent', () => {
  let component: StarbucksLoaderComponent;
  let fixture: ComponentFixture<StarbucksLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarbucksLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarbucksLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
