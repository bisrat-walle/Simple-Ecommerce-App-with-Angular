import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { Product, PRODUCTS } from '../product/product.object';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productList = PRODUCTS;

  constructor(private route: ActivatedRoute, private selectedProduct: Product) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        for (let product of this.productList){
          if (product.id == param['id']){ 
            this.selectedProduct = product; 
          }
        }
   
      }
      );
  }

}
