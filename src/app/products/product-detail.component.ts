import {Component,OnInit} from '@angular/core'
import {ActivatedRoute,Router} from '@angular/router'
@Component({

    templateUrl:'./product-detail.component.html'

})

export class ProductDetail {
    title:string="Product details page";

    name:string;
    img:String;
    desc:string;
    constructor(private _route:ActivatedRoute,private _router:Router){
        
    }

    ngOnInit():void{
        let id= this._route.snapshot.params['id']
      
        this.title+= `${id}`


        this._route
        .queryParams
        .subscribe(params=>{
  
            this.name=params['name'],
             this.img=params['img'],
             this.desc=params['description']
        })
    }

    onBack():void{
        this._router.navigate(['/products']);
    }
}