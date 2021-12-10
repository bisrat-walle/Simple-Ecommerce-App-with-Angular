import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS } from './product.object';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("Product Created!")
  }


  onViewDetail(id : number){
    this.router.navigateByUrl('/products/detail/' + id); // ‘id’ is called parameter
  }


  productList = PRODUCTS;





}
