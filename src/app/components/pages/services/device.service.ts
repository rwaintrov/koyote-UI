import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Device} from "../../../interfaces/device.interface";
import * as _ from 'lodash';
import {map} from "rxjs";

// import * as lodash from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  // json:any[]=[];
  vendors: any[] = [];
  devices: Device[] = [{}];

  constructor(private http: HttpClient) {
  }

  a() {
   return   this.http.get<any>('assets/demo/data/device.json').pipe(map(res => {
      const devices = res['data'];
      const vendors = devices.map((device: any) => {
          return {name: device.vendor}
        }
      );
      const uniqueVendors = _.uniqBy(vendors, function (vendor: any) {
        return vendor.name;
      });
     return uniqueVendors.map(u => {
        return {
          label: u.name,
          icon: 'pi pi-box',
          routerLink: ['/vendor-device', u.name]
        }
      });
    }))

  }

  getDevices() {
    return this.http.get<any>('assets/demo/data/device.json')
    // .subscribe((res:any[])=>{
    //   this.json=res;
    //   console.log(res);
    // })
    // console.log(this.json);
  }

  getVendors() {
    this.getDevices().subscribe((res: any) => {
        this.devices = res.data
        console.log(this.devices)
        let j = 0;
        let i = 0;
        let x = 0;
        // debugger
        this.vendors[0] = this.devices[0].vendor
        for (i = 1; i < this.devices.length; i++) {
          let temp = this.devices[i].vendor
          for (j = 0; j <= 10; j++) {
            if (this.vendors[j] == temp) {
              break;
            }
          }
          if (j == 11) {
            x++;
            this.vendors[x] = temp;
          }
          j = 0;
        }
        console.log(this.vendors + "bbbb");
        return this.vendors
      }
    )
  }


  // getDevices() {
  //   return  this.http.get<any>('assets/demo/data/device.json')
  //     .toPromise()
  //     .then((res:any) => res.data as Device[])
  //     .then((data:any) => data);
  // }

  getProducts() {
    return this.http.get<any>('assets/demo/data/products.json')
      .toPromise()
      .then((res: any) => res.data as Product[])
      .then((data: any) => data);
  }

  getProductsMixed() {
    return this.http.get<any>('assets/demo/data/products-mixed.json')
      .toPromise()
      .then((res: any) => res.data as Product[])
      .then((data: any) => data);
  }

  getProductsWithOrdersSmall() {
    return this.http.get<any>('assets/demo/data/products-orders-small.json')
      .toPromise()
      .then((res: any) => res.data as Product[])
      .then((data: any) => data);
  }

  getProductsWithOrdersLarge() {
    return this.http.get<any>('assets/demo/data/products-orders.json')
      .toPromise()
      .then((res: any) => res.data as Product[])
      .then((data: any) => data);
  }
}


export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  // inventoryStatus?: InventoryStatus;
  category?: string;
  image?: string;
  rating?: number;
}
