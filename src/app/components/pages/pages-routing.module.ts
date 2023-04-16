import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './containers/pages.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {DeviceComponent} from "./components/device/device.component";
import {CveComponent} from "./components/cve/cve.component";
import {PasComponent} from "./components/pas/pas.component";
import {AlertComponent} from "./components/alert/alert.component";
import {VendorDeviceComponent} from "./components/vendor-device/vendor-device.component";
import {SingleDeviceComponent} from "./components/single-device/single-device.component";

const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [

      {path: '', component: DashboardComponent},
      {path: 'device', component: DeviceComponent},
      {path: 'vendor-device/:vendor', component: VendorDeviceComponent},
      {path: 'vendor-device', component: VendorDeviceComponent},
      {path: 'PAS', component: PasComponent},
      // {path: 'CVE', component: CveComponent},
      {path: 'alert', component: AlertComponent},
      {path: 'single-device/:ip', component: SingleDeviceComponent},
      {path: 'CVE/:id', component: CveComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
