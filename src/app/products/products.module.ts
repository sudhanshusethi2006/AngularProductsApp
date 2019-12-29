import  {NgModule} from '@angular/core'

import {productFilter} from './product-filter-pipe';
import {ProductComponent } from './products.component';
import {ProductDetail} from './product-detail.component';
import {ProductService} from './product.service';
//  import {StarComponent} from '../shared/star.component';
import {RouterModule} from '@angular/router'
// import {FormsModule} from '@angular/forms'
// import {CommonModule} from '@angular/common'
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports:[
        SharedModule,
        // CommonModule,
        // FormsModule,
        RouterModule.forChild([
            {path:'products',component:ProductComponent},
            {path:'product-detail/:id',component:ProductDetail},
        ])

    ],
    declarations:[
        ProductComponent,
        productFilter,
        ProductDetail
        // StarComponent
     

    ],
    providers:[
        ProductService
    ]
})



export class ProductModule{

}