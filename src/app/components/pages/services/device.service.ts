import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Device} from "../../../interfaces/device.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  json:any[]=[];

  constructor(private http: HttpClient) { }
  getDevices() {
     return  this.http.get<any>('assets/demo/data/device.json')
    // .subscribe((res:any[])=>{
    //   this.json=res;
    //   console.log(res);
    // })
    // console.log(this.json);
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
      .then((res:any) => res.data as Product[])
      .then((data:any) => data);
  }

  getProductsMixed() {
    return this.http.get<any>('assets/demo/data/products-mixed.json')
      .toPromise()
      .then((res:any) => res.data as Product[])
      .then((data:any) => data);
  }

  getProductsWithOrdersSmall() {
    return this.http.get<any>('assets/demo/data/products-orders-small.json')
      .toPromise()
      .then((res:any) => res.data as Product[])
      .then((data:any) => data);
  }

  getProductsWithOrdersLarge() {
    return this.http.get<any>('assets/demo/data/products-orders.json')
      .toPromise()
      .then((res:any) => res.data as Product[])
      .then((data:any) => data);
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
