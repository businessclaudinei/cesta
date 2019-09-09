import { EditorProductComponent } from './pages/product/editor-product/editor-product.component';
import { ManagerGuard } from './guard/manager.guard';
import { AuthenticatedGuard } from './guard/authenticated.guard';
import { LoginComponent } from './pages/login/login.component';
import { AppPage } from './../../e2e/src/app.po';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './pages/product/product-list/product-list.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:ProductListComponent, canActivate:[AuthenticatedGuard]},
  {path:'edit',component:EditorProductComponent, canActivate:[AuthenticatedGuard,ManagerGuard]}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
