import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanOneComponent } from './super-saiyan-one.component';

describe('SuperSaiyanOneComponent', () => {
  let component: SuperSaiyanOneComponent;
  let fixture: ComponentFixture<SuperSaiyanOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
