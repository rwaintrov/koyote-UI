import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DeviceService} from "../../services/device.service";
import {CveService} from "../../services/cve.service";

@Component({
  selector: 'app-single-device',
  templateUrl: './single-device.component.html',
  styleUrls: ['./single-device.component.scss']
})
export class SingleDeviceComponent implements OnInit{
   ip: any;
   cves:any[]=[];
  currentDevice:any
   devices:any[]=[];
  constructor(  private  route :ActivatedRoute,private cveService:CveService,private deviceService:DeviceService) {
  }
  ngOnInit(): void {
    this.getCurrentDevice();
    this.cveService.getCve().subscribe((res:any)=>{
      this.cves=res['data'];
      console.log(this.cves)
    })
    this.route.params.subscribe(params=>{
      this.ip=params['ip'];
    })
  }
  getCurrentDevice() {
    this.deviceService.getDevices().subscribe((res: any) => {
      this.devices = res['data'];
      this.currentDevice= this.devices.find((x: any) =>
        x.IP_address === this.ip
      )
      console.log(this.currentDevice);
    })
  }
  arr: any[]=[4,5,8,7,9];

}
