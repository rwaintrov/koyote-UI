import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './containers/pages.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {DeviceComponent} from "./components/device/device.component";
import {CveComponent} from "./components/cve/cve.component";
import {PasComponent} from "./components/pas/pas.component";
import {AlertComponent} from "./components/alert/alert.component";
import {VendorDeviceComponent} from "./components/vendor-device/vendor-device.component";

const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [

      {path: '', component: DashboardComponent},
      {path: 'device', component: DeviceComponent},
      {path: 'device/:vendor', component: DeviceComponent},
      {path: 'vendor-device', component: VendorDeviceComponent},
      {path: 'PAS', component: PasComponent},
      {path: 'CVE', component: CveComponent},
      {path: 'alert', component: AlertComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
