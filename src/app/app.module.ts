import { ManagerGuard } from './guard/manager.guard';
import { AuthenticatedGuard } from './guard/authenticated.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { EditorProductComponent } from './pages/product/editor-product/editor-product.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    EditorProductComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthenticatedGuard,ManagerGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
