
import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

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
   showImage; boolean = false;
   
   _listFilter: string;
   get listFilter(): string {
       return this._listFilter;
   }
   set listFilter(value:string) {
       this._listFilter = value;
       this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter) : this.products;
   }

   filteredProducts: IProduct[];
   products: IProduct[] = [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.9019,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    }
   ];

   constructor() {
       this.filteredProducts = this.products; // sets the filtered list to all products for default
       this.listFilter = 'cart'; // sets the filter to cart, for some reason.
   } // using a class constructor to set default values for more complex properties

   performFilter(filterBy: string): IProduct[] {
       filterBy = filterBy.toLocaleLowerCase();
       return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1); // for each item in the array, check that it contains the string. If it appears anywhere, add it to the returned values.
   }

   toggleImage(): void {
       this.showImage = !this.showImage;
   }

   ngOnInit(): void {
       console.log('In OnInit');
   }
}