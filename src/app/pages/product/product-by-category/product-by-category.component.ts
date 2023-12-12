import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLoginService } from '../../../service/user-login.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrl: './product-by-category.component.css'
})
export class ProductByCategoryComponent {
  
  // Datatype
  id : any;
  responseData : any;
  
  constructor(
    private router : Router,
    private _route : ActivatedRoute,
    private loginService : UserLoginService
  ) { }

  ngOnInit() : void {
    this.id = this._route.snapshot.params['id'];
    console.log(this.id);

    this.loginService.getProductById(this.id)
      .subscribe((data : any) => {
        this.responseData = data;
        console.log(this.responseData);
      })
  }

  addProduct(id : any) {
    this.router.navigateByUrl(`addProductById/${id}`)
  }

  logout() {
    this.loginService.logOut();
  };
  
}
