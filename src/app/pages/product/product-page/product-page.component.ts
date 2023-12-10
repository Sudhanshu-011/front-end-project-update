import { Component } from '@angular/core';
import { UserLoginService } from '../../../service/user-login.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  // Datatypes
  data : any;

  bill = {
    fileName: '',
    name: '',
    email: '',
    contactNumber: '',
    paymentMethod: '',
    total: '',
    productDetails: [{
      id: '',
      name: '',
      price: '',
      total: '',
      category: '',
      quantity: ''
    }],
    totalAmount: ''
  }

  constructor(private userService : UserLoginService) { }

  // logics
  ngOnInit() {
    this.userService.getProduct()
      .subscribe((data : any) => {
        this.data = data;
      })
  }

  addToCart(product : any) {
    this.bill.fileName = 'xyzzzxy';
    this.bill.productDetails[0].id = product.id;
    this.bill.productDetails[0].name = product.name;
    this.bill.productDetails[0].price = product.price;
    this.bill.productDetails[0].total = '100';
    this.bill.productDetails[0].category = product.category;
    this.bill.productDetails[0].quantity = '1';
    this.bill.paymentMethod = 'Cash';
    this.bill.totalAmount = '100';
    this.userService.billgenerate(this.bill)
      .subscribe((data: any) =>{
        console.log(data);
      });
  }
}
