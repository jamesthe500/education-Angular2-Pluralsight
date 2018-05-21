
import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';

@Component ({
    selector : 'pm-products',
    templateUrl : './product-list.component.html',
    styleUrls : ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
   pageTitle: string = 'Product Listerific';
   columnHeader1: string = 'Products';
   imageWidth: number = 50;
   imageMargin: number = 2;
   showImage: boolean = false;
   errorMessage: string;
   
   _listFilter: string;
   get listFilter(): string {
       return this._listFilter;
   }
   set listFilter(value:string) {
       this._listFilter = value;
       this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter) : this.products;
   }

   filteredProducts: IProduct[];
   products: IProduct[] = [];

   constructor(private _productService: ProductService) {

   }

   onRatingClicked(message: string): void {
       this.pageTitle = 'Product List: ' + message;
   }

   performFilter(filterBy: string): IProduct[] {
       filterBy = filterBy.toLocaleLowerCase();
       return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1); // for each item in the array, check that it contains the string. If it appears anywhere, add it to the returned values.
   }

   toggleImage(): void {
       this.showImage = !this.showImage;
   }

   ngOnInit(): void {
       this._productService.getProducts()
        .subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products; // moved into here so that it gets set after the products are received.
        })
        
   }

   onNotify(message: string): void {}
}