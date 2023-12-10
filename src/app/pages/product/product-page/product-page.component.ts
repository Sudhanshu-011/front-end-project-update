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

  constructor(private userService : UserLoginService) { }

  // logics
  ngOnInit() {
    this.userService.getProduct()
      .subscribe((data : any) => {
        this.data = data;
      })
  }
}
