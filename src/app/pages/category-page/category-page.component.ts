import { Component } from '@angular/core';
import { UserLoginService } from '../../service/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {
  
  // Datatypes
  responseData : any;

  constructor(private userService : UserLoginService, private router: Router) { }

  // logics
  ngOnInit(): void {
    this.userService.getCategoryData()
      .subscribe((data : any) => {
        this.responseData = data;
        console.log(this.responseData);
      })
  }

  viewCategory(id : any) {
    this.router.navigateByUrl(`/product/${id}`);
  }

  addCategory() {
    this.router.navigateByUrl(`/addCategory`);
  }

  logout() {
    this.userService.logOut();
  }
}