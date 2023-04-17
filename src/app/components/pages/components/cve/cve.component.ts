import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CveService} from "../../services/cve.service";

@Component({
  selector: 'app-cve',
  templateUrl: './cve.component.html',
  styleUrls: ['./cve.component.scss']
})
export class CveComponent implements OnInit {
  id: any;
  cves: any[] = [];
  currentCve:any

  constructor(private route: ActivatedRoute, private cveService: CveService) {

  }

  ngOnInit(): void {
    this.getCurrentCve();


    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }

  getCurrentCve() {
    this.cveService.getCve().subscribe((res: any) => {
      this.cves = res['data'];
      this.currentCve= this.cves.find((x: any) =>
          x.id === this.id
      )
      // console.log(this.currentCve);
    })
  }
}
