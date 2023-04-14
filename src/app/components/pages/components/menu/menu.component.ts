import {Component, OnInit} from '@angular/core';
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  model: any[] = [];
  vendors: any[] = [];

  constructor(private deviceService: DeviceService) {
  }

  getVendors() {
    this.vendors=this.deviceService.vendors;
    console.log("i here3");
    console.log(this.vendors)

  }

  ngOnInit() {
    this.getVendors();
    this.model = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: ['/pages']
      },
      {separator: true},
      {
        label: 'Inventory',
        icon: 'pi pi-mobile',
        items: [
          {
            label: 'Device Inventory',
            icon: 'pi pi-fw pi-align-left',
            items: [
              {
                label:this.vendors,
                icon: 'pi pi-fw pi-align-left',
                // routerLink: ['/device']
              },
            ]
          },

        ]
      },

      {separator: true},
      {
        label: 'Potential Attack Scenarios',
        icon: 'pi pi-share-alt',
        routerLink: ['/alert']
      },
      {
        label: 'Compliance',
        icon: 'pi pi-fw pi-download',
        routerLink: ['/alert']
      },
      {
        label: 'Alerts',
        icon: 'pi pi-fw pi-download',
        routerLink: ['/alert']
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        routerLink: ['/alert']
      }
    ];
  }
}
