import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, PRODUCTS } from '../product/product.object';
import { CUSTOMERS } from './customer.object';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  customerList = CUSTOMERS;

  delete(id: number){
    let index = 0;
    for (let product of this.customerList){
      if (product.id == id){ 
        break
      }
      index += 1; 
    }
    this.customerList.splice(index, 1)
  }


  add(){
    this.router.navigateByUrl('/customers/detail/' + -1);
  }


  productList = PRODUCTS;

  update(id: number){
    this.router.navigateByUrl('/customers/detail/' + id);
  }


}

