import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  

  username_stat='admin';
  password_stat='123456';


  Sales=[
    {
      month:'Jan',
      sales:510
    },
    {
      month:'Feb',
      sales:520
    },
    {
      month:'Mar',
      sales:520
    },
    {
      month:'Apr',
      sales:580
    },
    {
      month:'May',
      sales:510
    },
    {
      month:'Jun',
      sales:590
    },
    {
      month:'Jul',
      sales:500
    },
    {
      month:'Aug',
      sales:500
    },
    {
      month:'Sep',
      sales:510
    },
    {
      month:'Oct',
      sales:580
    },
    {
      month:'Nov',
      sales:500
    },
    {
      month:'Dec',
      sales:400
    },
    
  ]
  Invoices=[
    {
      month:'Jan',
      sales:500
    },
    {
      month:'Feb',
      sales:508
    },
    {
      month:'Mar',
      sales:580
    },
    {
      month:'Apr',
      sales:600
    },
    {
      month:'May',
      sales:570
    },
    {
      month:'Jun',
      sales:900
    },
    {
      month:'Jul',
      sales:500
    },
    {
      month:'Aug',
      sales:530
    },
    {
      month:'Sep',
      sales:800
    },
    {
      month:'Oct',
      sales:500
    },
    {
      month:'Nov',
      sales:550
    },
    {
      month:'Dec',
      sales:500
    },
    
  ]


  Stores=[
    {
      month:'Jan',
      sales:500
    },
    {
      month:'Feb',
      sales:500
    },
    {
      month:'Mar',
      sales:500
    },
    {
      month:'Apr',
      sales:580
    },
    {
      month:'May',
      sales:500
    },
    {
      month:'Jun',
      sales:540
    },
    {
      month:'Jul',
      sales:510
    },
    {
      month:'Aug',
      sales:560
    },
    {
      month:'Sep',
      sales:500
    },
    {
      month:'Oct',
      sales:900
    },
    {
      month:'Nov',
      sales:500
    },
    {
      month:'Dec',
      sales:500
    },
    
  ]
  Product=[
    {
      month:'Jan',
      sales:500
    },
    {
      month:'Feb',
      sales:500
    },
    {
      month:'Mar',
      sales:500
    },
    {
      month:'Apr',
      sales:580
    },
    {
      month:'May',
      sales:510
    },
    {
      month:'Jun',
      sales:500
    },
    {
      month:'Jul',
      sales:580
    },
    {
      month:'Aug',
      sales:500
    },
    {
      month:'Sep',
      sales:500
    },
    {
      month:'Oct',
      sales:590
    },
    {
      month:'Nov',
      sales:500
    },
    {
      month:'Dec',
      sales:500
    },
    
  ]

  Purchase_Orders=[
    {
      month:'Jan',
      sales:500
    },
    {
      month:'Feb',
      sales:500
    },
    {
      month:'Mar',
      sales:500
    },
    {
      month:'Apr',
      sales:500
    },
    {
      month:'May',
      sales:560
    },
    {
      month:'Jun',
      sales:500
    },
    {
      month:'Jul',
      sales:505
    },
    {
      month:'Aug',
      sales:550
    },
    {
      month:'Sep',
      sales:580
    },
    {
      month:'Oct',
      sales:508
    },
    {
      month:'Nov',
      sales:508
    },
    {
      month:'Dec',
      sales:504
    },
    
  ]


  products=[
    {
      code:'prd01',
      name:'Apple MacBook',
      price:'65000' 
    },
    {
      code:'prd02',
      name:'Bluetooth Speaker',
      price:'5000' 
    },
    {
      code:'prd03',
      name:'Mobile',
      price:'15000' 
    },
  ]

  Login(username,password){
    console.log("Service login")
    if(username == this.username_stat && password == this.password_stat){
      return true;
    }else{
      return false;
    }
  }


  SalesService(){
  return this.Sales;
  }

  InvoicesDetails(){
    return this.Invoices;
  }


  StotesDetails(){
    return this.Stores
  }

  productDetails(){
    return this.Product
  }

  purchase_order(){
    return this.Purchase_Orders
  }

  GetProductDetails(){
    return this.products;
  }


}
