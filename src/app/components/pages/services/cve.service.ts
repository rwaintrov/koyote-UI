import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CveService {

  constructor(private http:HttpClient) { }
  getCve(){
    return this.http.get<any>('assets/demo/data/cve.json')
  }
}
