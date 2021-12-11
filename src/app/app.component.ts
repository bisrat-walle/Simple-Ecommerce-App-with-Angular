import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular-app';
  constructor(private router: Router){}
  customer(){
    this.router.navigateByUrl('customers/')
  }

  //customers = [];


}