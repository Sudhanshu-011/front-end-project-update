import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../../service/user-login.service';
import { SnackbarServiceService } from '../../service/snackbar-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  // Datatypes
  userData = {
    email: ''
  }

  constructor(private router : Router, private forgetPasswordService : UserLoginService, private snack : SnackbarServiceService) { }

  // logics
  formSubmit() {
    this.forgetPasswordService.forgotPassword(this.userData)
      .subscribe
        ((response : any) => {
          this.snack.openSnackBar("Check your mail for credentials", '');
          this.router.navigateByUrl('/');
        }
      )
  }

  cancelFunction() {
    this.router.navigateByUrl('/');
  }
}
