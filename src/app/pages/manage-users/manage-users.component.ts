import { Component } from '@angular/core';
import { UserLoginService } from '../../service/user-login.service';
import { Router } from '@angular/router';
import { SnackbarServiceService } from '../../service/snackbar-service.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent {

  // Datatype
  user : any

  statusData = {
    id: '',
    status: ''
  }

  constructor(
    private loginService : UserLoginService,
    private router : Router, 
    private snack : SnackbarServiceService) { }

  // logic
  ngOnInit() {
    this.loginService.getAllUser()
      .subscribe((data : any) => {
        this.user = data;
        console.log(this.user);
      })
  }

  toggleStatus(id : any, status : any) {
    if (status === 'true') {
      status = 'false';
    } else status = 'true';

    this.statusData.id = id;
    this.statusData.status = status;

    this.loginService.updateStatus(this.statusData)
      .subscribe((data : any) => {
        console.log(data);
      });
    this.snack.openSnackBar("User status updated successfully", '');
    this.router.navigateByUrl('/user');
  }

  logout() {
    this.loginService.logOut();
  }
}
