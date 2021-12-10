import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import { Product, PRODUCTS } from './product.object';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onViewDetail(id : number){
    this.router.navigateByUrl('/products/detail/' + id); // ‘id’ is called parameter
  }

  delete(id: number){
    let index = 0;
    for (let product of PRODUCTS){
      if (product.id == id){ 
        break
      }
      index += 1; 
    }
    PRODUCTS.splice(index, 1)
  }


  add(){
    //this.router = 
  }


  productList = PRODUCTS;





}
