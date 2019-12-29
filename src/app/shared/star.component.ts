import {Component, OnChanges,Input, Output, EventEmitter} from '@angular/core'
import { templateJitUrl } from '@angular/compiler';
// import { EventEmitter } from 'events';

@Component({

    selector:'stars',
    templateUrl:'./star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
   @Input() rating:number;
    starWidth:number;
    @Output() clickOnRating: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges():void{
        this.starWidth=(this.rating*86)/6;
  
    }

    onStar(): void{

        this.clickOnRating.emit(`The rating clicked is  ${this.rating}`)
    }




}


// var a= "asda";
// va
