import { Component } from '@angular/core';
import { UserLoginService } from '../../service/user-login.service';
import { Router } from '@angular/router';
import { SnackbarServiceService } from '../../service/snackbar-service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  // Datatypes
  addData = {
    name: ''
  }

  constructor(private loginService : UserLoginService, private router : Router, private snack : SnackbarServiceService) { }

  // logics
  formSubmit() {
    this.loginService.addCategory(this.addData)
      .subscribe((data : any) => {
        console.log(data);
      });
    
    this.snack.openSnackBar("Category added successfully", '');
    this.router.navigateByUrl('/category');
  }

  cancelFunction() {
    this.router.navigateByUrl('/category');
  }

  logout() {
    this.loginService.logOut();
  }
}
