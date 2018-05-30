import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {routing  } from "./app.routing";
import {RouterModule,Routes  } from "@angular/router";


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Checkout1Component } from './checkout1/checkout1.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header.component';

import { LoginService } from './login/login.service';
import { Header1Component } from './header1.component';
import { LogoutComponent } from './logout/logout.component';
import { FileupComponent } from './fileup/fileup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    CartComponent,
    CheckoutComponent,
    Checkout1Component,
    ContactComponent,
    ProductComponent,
    HeaderComponent,
    Header1Component,
    LogoutComponent,
    FileupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    RouterModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
