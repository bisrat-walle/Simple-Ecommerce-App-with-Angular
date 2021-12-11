import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CUSTOMERS } from '../customer/customer.object';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {

  constructor(private route :ActivatedRoute , private router: Router) {}

  selectedCustomer = CUSTOMERS[0];

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        if (param['id'] == -1){
          document.getElementById("update")?.classList.add("hide");
          document.getElementById("add")?.classList.remove("hide");
        } else{
          document.getElementById("update")?.classList.remove("hide");
          document.getElementById("add")?.classList.add("hide");
          
            for (let customer of CUSTOMERS){
              if (customer.id == param['id']){ this.selectedCustomer = customer; }
            }
            document.querySelector('#exampleInputEmail1')?.setAttribute('placeholder', this.selectedCustomer.name);
            document.querySelector('#exampleInputPassword1')?.setAttribute('placeholder', this.selectedCustomer.email);
  

        }

      })
  }
  customer2: Customer = {
    id: -1,
    name: '',
    email: "ABE@GDKJ.VOM",
    imgUrl: "assets/girl.jpg",
    description: ''   
  }


  
updateCustomer(f: NgForm){
  let n = f.value;
  this.selectedCustomer.name = n.name;
  this.selectedCustomer.email = n.email;
  this.router.navigateByUrl("customers/");
}



add(a: NgForm){
  let n = a.value;

  this.customer2.id = n['id']
  this.customer2.name = n['name']
  this.customer2.description = n['des']

  CUSTOMERS.push(this.customer2);
  this.router.navigateByUrl("customers/");

}
}
