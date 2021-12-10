import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, PRODUCTS } from '../product/product.object';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  
  products = PRODUCTS;
  selectedProduct = PRODUCTS[0];
  constructor(private route: ActivatedRoute, private router: Router ) { 

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        for (let product of this.products){
          if (product.id == param['id']){ this.selectedProduct = product; }
        }

      })
    }

    
  updateProduct(f: NgForm){
    let n = f.value;
    this.selectedProduct.name = n.name;
    this.selectedProduct.price = n.price;
    this.router.navigateByUrl("");
  }

  delete(id: number){
    delete PRODUCTS[id-1];
  }

  

}
