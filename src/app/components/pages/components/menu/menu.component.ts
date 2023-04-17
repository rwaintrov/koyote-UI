import {Component, OnInit} from '@angular/core';
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  model: any[] = [];

  // vendors: any[] = [];

  constructor(private deviceService: DeviceService) {
  }

  getVendors() {
    // this.vendors=this.deviceService.vendors;
    // console.log("i here3");
    // console.log(this.vendors)

  }

  ngOnInit() {
    this.getVendors();
    this.deviceService.a().subscribe(res=>
    {
      this.model = [
        {
          label: 'Dashboard',
          icon: 'pi pi-chart-bar',
          routerLink: ['/pages']
        },
        {separator: true},
        {
          label: 'Inventory',
          icon: 'pi pi-server',
          items: [
            {
              label: 'Device Inventory',
              icon: 'pi pi-box',
              items: [
                 ...res
              ]
            },
          ]
        },

        {separator: true},
        {
          label: 'Potential Attack Scenarios',
          icon: 'pi pi-backward',
          routerLink: ['/PAS']
        },
        {
          label: 'Compliance',
          icon: 'pi pi-check-square',
          routerLink: ['/pages']
        },
        {
          label: 'Alerts',
          icon: 'pi pi-exclamation-triangle',
          routerLink: ['/alert']
        },
        {
          label: 'Settings',
          icon: 'pi pi-cog',
          routerLink: ['/pages']
        }
      ];

    });
  }
}
