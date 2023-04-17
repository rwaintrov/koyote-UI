import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit{
  ngOnInit(): void {
    this.orderWeek = [
    {name: 'This Week', code: '0'},
    {name: 'Last Week', code: '1'}
  ];
  }
  sortOptions: any;
  arr: any[]=[4,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
  statusOptions: any[]=["New","Acknowledge","Shelve","Clear"];
  dateOptions: any;
  priorityOptions: any[]=["p1","p2","p3","p4"];
  riskOptions: any[]=["Critical","High","Medium","Low"];
  areaOptions: any[]=["Area1","Area2","Area3"];
  orderWeek:any[]=[];
  onSortChange($event: any) {

  }

}
