import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Product } from './product/product';
import { Productdetail } from './productdetail/productdetail';

export const routes: Routes = [
    {path: '',component: Home},
    {path:'products',component:Product},
    {path:'product/:id',component:Productdetail}
    
] 
