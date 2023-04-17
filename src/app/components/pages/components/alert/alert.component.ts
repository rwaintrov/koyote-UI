import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit{
  ngOnInit(): void {
    this.data = [
    {Date: '16/04/2023', Time: '22:42:15',  Color:"#C00000",Risk:'Critical',Status:'New',AffectedArea:'jj'},
      {Date: '16/04/2023', Time: '22:40:03',Color:"#FF2D2D",Risk:'High',Status:'New',AffectedArea:'jj'},
      {Date: '16/04/2023', Time: '22:02:55',Color:"#FFC000",Risk:'Medium',Status:'Acknowledge',AffectedArea:'jj'},
      {Date: '16/04/2023', Time: '20:15:15',Color:"#C00000",Risk:'Critical',Status:'Acknowledge',AffectedArea:'jj'},
      {Date: '16/04/2023', Time: '19:02:08',Color:"#FF2D2D",Risk:'High',Status:'Acknowledge',AffectedArea:'jj'},
      {Date: '16/04/2023', Time: '18:25:33',Color:"#C00000",Risk:'Critical',Status:'Acknowledge',AffectedArea:'jj'},
      {Date: '16/04/2023', Time: '20:15:15',Color:"#FFC000",Risk:'Medium',Status:'Acknowledge',AffectedArea:'jj'},
      {Date: '15/04/2023', Time: '21:40:46',Color:"#FFE599",Risk:'Low',Status:'Acknowledge',AffectedArea:'jj'},
      {Date: '15/04/2023', Time: '14:13:15',Color:"#FF2D2D",Risk:'High',Status:'Acknowledge',AffectedArea:'jj'},
      {Date: '15/04/2023', Time: '13:11:19',Color:"#FFE599",Risk:'Low',Status:'Acknowledge',AffectedArea:'jj'},

    ];
  }
  sortOptions: any;
  arr: any[]=[4,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
  statusOptions: any[]=["New","Acknowledge","Shelve","Clear"];
  dateOptions: any;
  priorityOptions: any[]=["p1","p2","p3","p4"];
  riskOptions: any[]=["Critical","High","Medium","Low"];
  areaOptions: any[]=["Area1","Area2","Area3"];
  data:any[]=[];
  onSortChange($event: any) {

  }

}
