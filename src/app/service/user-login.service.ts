import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http : HttpClient) { }

  public loginMethod(userLoginData : any) {
    return this.http.post("http://localhost:8080/user/login", userLoginData);
  }

  public signUpMethod(registerData : any) {
    return this.http.post("http://localhost:8080/user/signUp", registerData);
  }

  public forgotPassword(userData : any) {
    return this.http.post("http://localhost:8080/user/forgotPassword", userData);
  }

  public getInfo() {
    return this.http.get("http://localhost:8080/dashboard/details");
  }

  public getCategoryData() {
    return this.http.get("http://localhost:8080/category/get")
  }

  public getProductById(id : any) {
    return this.http.get(`http://localhost:8080/product/getByCategory/${id}`);
  }

  public getProduct() {
    return this.http.get("http://localhost:8080/product/get");
  }

  public loginUser(token : any) {
    localStorage.setItem('token', token);
  }

  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    }
    else return true;
  }

  public getToken() {
    return localStorage.getItem('token');
  }
}
