import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {PagesModule} from "../pages/pages.module";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {FormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";


@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        PagesModule,
        PasswordModule,
        ButtonModule,
        DividerModule,
        FormsModule,
        ChipsModule
    ]
})
export class LoginModule { }
