import { Component } from '@angular/core';
import { UserLoginService } from '../../service/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  // Datatypes
  userData = {
    name: '',
    contactNumber: '',
    email: '',
    password: ''
  }

  constructor(private registerService : UserLoginService, private router : Router) { }

  // logics
  formSubmit() {
    this.registerService.signUpMethod(this.userData)
      .subscribe((data : any) => {
        console.log(data);
      });
  }

  cancelFunction() {
    this.router.navigateByUrl('/');
  }
}
