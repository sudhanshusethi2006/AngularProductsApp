import {Pipe,PipeTransform} from '@angular/core';

import {IProducts} from './products.model';
import { filter } from 'minimatch';

@Pipe({

    name:'productFilter'


})

export class productFilter implements PipeTransform {

    // transform(value: IProducts[], filterBy: string):IProducts[]{
    //     filterBy= filterBy ? filterBy.toLowerCase():null;
    //     return filterBy? value.filter((products:IProducts)=>
    //     products.productName.toLowerCase().indexOf(filterBy) != -1):value;


        transform(value: IProducts[], filterBy: string):IProducts[]{
            filterBy= filterBy ? filterBy.toLowerCase():null;
            return filterBy? value.filter((x)=>
            x.productName.toLowerCase().indexOf(filterBy) != -1 || x.productCode.toLowerCase().indexOf(filterBy) != -1 )  :value;
    }

}

// var add= (a,b) => { return a+b }
