import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { ProductByCategoryComponent } from './pages/product/product-by-category/product-by-category.component';
import { ProductPageComponent } from './pages/product/product-page/product-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },

  {
    path: 'signUp',
    component: SignupComponent,
    pathMatch: 'full'
  },

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full'
  },

  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent,
    pathMatch: 'full'
  },

  {
    path: 'category',
    component: CategoryPageComponent,
    pathMatch: 'full'
  },

  {
    path: 'product/:id',
    component: ProductByCategoryComponent,
    pathMatch: 'full'
  },

  {
    path: 'product',
    component: ProductPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
