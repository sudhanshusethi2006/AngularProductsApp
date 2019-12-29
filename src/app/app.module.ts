import{NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';


import { OrderComponent } from './orders/order.component';
import { NotFound } from './shared/notFound.component';
import { HomeComponent } from './home/home.component';
import {RouterModule,Routes} from '@angular/router'
import { ProductModule } from './products/products.module';

const appRoutes2: Routes= [
  
    {path:'orders',component:OrderComponent},
    {path:'home',component:HomeComponent},
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'**',component:NotFound}
  ]
@NgModule({
    // this will contain all the modules
imports:[
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductModule,
   
    RouterModule.forRoot(
        appRoutes2 
    )
],
// this will contain all the components
declarations:[ 
    AppComponent,
 
  
 
 
    OrderComponent,
    NotFound,
   HomeComponent
],
// this is the started file it will only contain the main component. bootstrap is only in main mo dule
// this is to run the component and not same as the styling bootstrap
bootstrap:[
AppComponent

],
// providers:[
   
// ]
})

export class AppModule{

}

