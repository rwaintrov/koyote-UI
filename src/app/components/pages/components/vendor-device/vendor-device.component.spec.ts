import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDeviceComponent } from './vendor-device.component';

describe('VendorDeviceComponent', () => {
  let component: VendorDeviceComponent;
  let fixture: ComponentFixture<VendorDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorDeviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
