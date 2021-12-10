import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, PRODUCTS } from '../product/product.object';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  
  products = PRODUCTS;
  selectedProduct = PRODUCTS[0];
  constructor(private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        for (let product of this.products){
          if (product.id == param['id']){ this.selectedProduct = product; }
        }

      })
    }

    
  updateProduct(){

    
     
  }

}
