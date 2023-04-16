import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './containers/pages.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { StyleClassModule } from "primeng/styleclass";
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TooltipModule } from "primeng/tooltip";
import { ConfigComponent } from './components/config/config.component';
import { RadioButtonModule } from "primeng/radiobutton";
import { InputSwitchModule } from "primeng/inputswitch";
import { FormsModule } from "@angular/forms";
import { SidebarModule } from "primeng/sidebar";
import { UserTypeComponent } from './components/user-type/user-type.component';
import { DropdownModule } from "primeng/dropdown";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AttackScenariosComponent } from './components/attack-scenarios/attack-scenarios.component';
import { DeviceComponent } from './components/device/device.component';
import { AlertComponent } from './components/alert/alert.component';
import { CveComponent } from './components/cve/cve.component';
import { PasComponent } from './components/pas/pas.component';
import { TableModule } from "primeng/table";
import { MenuModule } from "primeng/menu";
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from "primeng/button";
import {FileUploadModule} from "primeng/fileupload";
import {ToggleButtonModule} from "primeng/togglebutton";
import {ToastModule} from "primeng/toast";
import {RatingModule} from "primeng/rating";
import {MultiSelectModule} from "primeng/multiselect";
import {SliderModule} from "primeng/slider";
import {ChipsModule} from "primeng/chips";
import {StepsModule} from "primeng/steps";
import {TabMenuModule} from "primeng/tabmenu";
import {BreadcrumbModule} from "primeng/breadcrumb";
import { VendorDeviceComponent } from './components/vendor-device/vendor-device.component';
import {CardModule} from "primeng/card";
import { SingleDeviceComponent } from './components/single-device/single-device.component';
// import {ChartModule} from "primeng/chart";


@NgModule({
  declarations: [
    PagesComponent,
    TopBarComponent,
    MenuComponent,
    MenuItemComponent,
    SideBarComponent,
    ConfigComponent,
    UserTypeComponent,
    DashboardComponent,
    AttackScenariosComponent,
    DeviceComponent,
    AlertComponent,
    CveComponent,
    PasComponent,
    VendorDeviceComponent,
    SingleDeviceComponent
  ],
  exports: [
    TopBarComponent,
    ConfigComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        StyleClassModule,
        TooltipModule,
        RadioButtonModule,
        InputSwitchModule,
        FormsModule,
        SidebarModule,
        DropdownModule,
        TableModule,
        MenuModule,
        ChartModule,
        ButtonModule,
        FileUploadModule,
        ToggleButtonModule,
        ToastModule,
        RatingModule,
        MultiSelectModule,
        SliderModule,
        ChipsModule,
        StepsModule,
        TabMenuModule,
        BreadcrumbModule,
        CardModule,
        // ChartModule,

    ]
})
export class PagesModule { }
