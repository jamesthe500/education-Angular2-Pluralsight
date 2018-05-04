
// 2. next the decorator
import { Component } from '@angular/core';
@Component({
  selector: 'pm-root',
  template: `
  <div>
  <h1>{{pageTitle}}</h1>  
  <pm-products></pm-products>
  </div>`
})

// 1. create the class first (a preference)
export class AppComponent { 
  pageTitle: string = "Acme Product Management"
}