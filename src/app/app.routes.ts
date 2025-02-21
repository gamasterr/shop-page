import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ProductComponent} from './pages/product/product.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';
import {CartComponent} from './pages/cart/cart.component';



export const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'about',
    component:AboutComponent,
  },
  {
    path:'product',
    component:ProductComponent,
  },
  {
   path:'product-detail/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  }
];
