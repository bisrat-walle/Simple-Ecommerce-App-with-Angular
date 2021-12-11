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
        if (param['id'] == -1){
          document.getElementById("update")?.classList.add("hide");
          document.getElementById("add")?.classList.remove("hide");
        } else{
          document.getElementById("update")?.classList.remove("hide");
          document.getElementById("add")?.classList.add("hide");

          
            for (let product of this.products){
              if (product.id == param['id']){ this.selectedProduct = product; }
            }

            document.querySelector('#exampleInputEmail1')?.setAttribute('placeholder', this.selectedProduct.name);
            document.querySelector('#exampleInputPassword1')?.setAttribute('placeholder', String(this.selectedProduct.price));

        }

      })
    }

    product2: Product = {
      id: -1,
      name: '',
      price: 2000,
      imageUrl: 'assets/pro_img.jfif',
      description: ''   
    }
  

    
  updateProduct(f: NgForm){
    let n = f.value;
    this.selectedProduct.name = n.name;
    this.selectedProduct.price = n.price;
    this.router.navigateByUrl("");
  }

  

  add(a: NgForm){
    let n = a.value;

    this.product2.id = n['id']
    this.product2.name = n['name']
    this.product2.description = n['des']
    this.product2.price = n['price']

    this.products.push(this.product2);
    this.router.navigateByUrl("");

  }

  

}
