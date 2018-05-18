
// 2. next the decorator
import { Component } from '@angular/core';
import { ProductService } from './products/product.service';
@Component({
  selector: 'pm-root',
  template: `
  <div>
  <h1>{{pageTitle}}</h1>  
  <pm-products></pm-products>
  </div>`,
  providers: [ ProductService ]
})

// 1. create the class first (a preference)
export class AppComponent { 
  pageTitle: string = "Acme Product Management"
}