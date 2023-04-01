import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackScenariosComponent } from './attack-scenarios.component';

describe('AttackScenariosComponent', () => {
  let component: AttackScenariosComponent;
  let fixture: ComponentFixture<AttackScenariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackScenariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttackScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
