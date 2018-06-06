import { Component, OnInit } from '@angular/core';

import { IProduct } from './products';

@Component({
  //selector: 'pm-product-detail', // Auto generated. Not needed as won't be nesting this component within another.
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
