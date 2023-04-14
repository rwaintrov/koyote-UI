import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-pas',
  templateUrl: './pas.component.html',
  styleUrls: ['./pas.component.scss']
})
export class PasComponent implements OnInit {
  routeItems: MenuItem[] = [];

  ngOnInit(): void {
    this.routeItems = [
      {label: 'Connectivity to ICS from IT network', routerLink: 'personal'},
      {label: 'Login to IT network PC', routerLink: 'seat'},
      {label: 'Download Attack tools', routerLink: 'payment'},
      {label: 'Get Control over Domain Controller', routerLink: 'confirmation'},
      {label: 'Create new valid account', routerLink: 'confirmation'},
      {label: 'Connect the JumpHost and access OT Network', routerLink: 'confirmation'},
      {label: 'Get Access to HMI and visualize the screen', routerLink: 'confirmation'},

    ];
  }

}
