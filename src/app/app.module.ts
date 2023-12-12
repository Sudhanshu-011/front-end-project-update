import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './pages/signup/signup.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { authInterceptorProviders } from './service/auth.interceptor';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { ProductByCategoryComponent } from './pages/product/product-by-category/product-by-category.component';
import { ProductPageComponent } from './pages/product/product-page/product-page.component';
import { AddProductByIdComponent } from './pages/product/add-product-by-id/add-product-by-id.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    CategoryPageComponent,
    ProductByCategoryComponent,
    ProductPageComponent,
    AddProductByIdComponent,
    AddCategoryComponent,
    ManageUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
