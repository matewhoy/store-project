import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import {Product} from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy{
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    constructor(){
        console.log('1. constructor');
    }

    /* ngOnChanges(changes: SimpleChanges ){
        console.log('2. ngOnChanges')
        console.log(changes);
    } */

    ngOnInit(): void {
        console.log('3. ngOnInit');
    }

    addCart(): void{
        console.log ('añadir al carrito');
        this.productClicked.emit(this.product.id);
    }

    ngDoCheck(): void{
        console.log('4. ngOnChek');
    }

    ngOnDestroy(): void{
        console.log('5. ngOnDestroy');
    }
}
