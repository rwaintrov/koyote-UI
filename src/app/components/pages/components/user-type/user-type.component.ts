import {Component, OnInit} from '@angular/core';
import {Authorization} from "../../../../interfaces/user.interface";

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  sortOptions: Authorization[]=[
    Authorization.CISO,Authorization.OperationManager,Authorization.SeniorManagement,Authorization.RealTime,
  ]
  onSortChange(event: any) {
    const value = event.value;
    //  מיון!!
    // if (value.indexOf('!') === 0) {
    //   this.sortOrder = -1;
    //   this.sortField = value.substring(1, value.length);
    // } else {
    //   this.sortOrder = 1;
    //   this.sortField = value;
    // }
  }

}
