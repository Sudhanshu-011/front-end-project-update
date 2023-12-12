import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLoginService } from '../../../service/user-login.service';
import { SnackbarServiceService } from '../../../service/snackbar-service.service';

@Component({
  selector: 'app-add-product-by-id',
  templateUrl: './add-product-by-id.component.html',
  styleUrl: './add-product-by-id.component.css'
})
export class AddProductByIdComponent {

  // Datatype
  id : any;

  addData = {
    categoryId: 0,
    name: '',
    description: '',
    price: 0
  }

  constructor(
    private router : Router,
    private _route : ActivatedRoute,
    private loginService : UserLoginService,
    private snack : SnackbarServiceService
  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.params['id'];
    console.log(this.id);
  }

  formSubmit() {
    this.addData.categoryId = this.id;

    this.loginService.addProduct(this.addData)
      .subscribe((data : any) => {
        console.log(data);
      });
      this.snack.openSnackBar("Product added successfully", '')
      this.router.navigateByUrl(`/product/${this.id}`);
  }

  cancelFunction() {
    console.log(this.id);
    this.router.navigateByUrl(`/product/${this.id}`);
  }

  logout() {
    this.loginService.logOut();
  }
}
