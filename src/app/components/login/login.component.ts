import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  value: any;
  value2: any;
  constructor(private route :Router) {
  }
ngOnInit() {
}

  login() {
    this.route.navigate(['pages']);
  }
}
