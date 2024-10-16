import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { LoantypesComponent } from './loantypes/loantypes.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authguardGuard } from './authguard.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{adminGuard} from './Guards/admin.guard'

const routes: Routes = [
  // {path:'product/:id', component: ProductsComponent},
  // {path:'product/:ProductID/Photos/:PhotoId', component:ProductsComponent},
  // {
  //   path:'clients', component:ClientsComponent,
  //   canActivate:[authguardGuard]   // if it returns true then clients 
  //                                   //component will be accessed else not
  // },
  {
    path:'',component:LoginComponent
  },
  {
    path:'dashboard', component:DashboardComponent,
    canActivate:[adminGuard]
  },  
  {
    path:'search',component:SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
