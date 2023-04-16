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

  constructor(private route: ActivatedRoute, private cveService: CveService) {

  }

  ngOnInit(): void {
    this.getCurrentCve();


    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }

  getCurrentCve(id?: any) {
    this.cveService.getCve().subscribe((res: any) => {
      this.cves = res['data'];
      const a = this.cves.filter((x: any) => {
          x.id === this.id

        }
      )
      console.log(a);  })
  }
}
