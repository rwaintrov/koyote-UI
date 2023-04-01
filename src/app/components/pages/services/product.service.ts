import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProductsSmall() {
    return this.http.get<any>('assets/demo/data/products-small.json')
      .toPromise()
      .then((res:any) => res.data as Product[])
      .then((data:any) => data);
  }

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
