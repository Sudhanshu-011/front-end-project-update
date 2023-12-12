import { Component } from '@angular/core';
import { UserLoginService } from '../../service/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  // Datatypes
  data : any;

  constructor(private dataService : UserLoginService, private router : Router) { }

  // logics
  ngOnInit(): void {
    this.dataService.getInfo()
      .subscribe((data : any) => {
        this.data = data;
        console.log(this.data);
      });
  }

  viewCategory() {
    this.router.navigateByUrl('/category');
  }

  viewProduct() {
    this.router.navigateByUrl('/product');
  }

  viewBill() {}

  logout() {
    this.dataService.logOut();
  }
}
