import { Routes,RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { IndexComponent } from "./index/index.component";
import { ProductComponent } from "./product/product.component";
import { ContactComponent } from "./contact/contact.component";
import { Checkout1Component } from "./checkout1/checkout1.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { CartComponent } from "./cart/cart.component";
import { LogoutComponent } from "./logout/logout.component";
const arr:Routes=[
    {path : '',redirectTo:'/login',pathMatch:'full'},
    {path : 'index',component:IndexComponent},
    {path : 'login',component:LoginComponent},
    {path : 'product',component:ProductComponent},
    {path : 'contact',component:ContactComponent},
    {path : 'checkout1',component:Checkout1Component},
    {path : 'checkout',component:CheckoutComponent},
    {path : 'cart',component:CartComponent},
    {path : 'logout',component:LogoutComponent}
];
export const routing =RouterModule.forRoot(arr);