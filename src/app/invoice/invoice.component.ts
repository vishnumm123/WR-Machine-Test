import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor( public fb: FormBuilder,private newService:ServiceService) { }

  number: any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

 products;
 p_code=[];
 price
 tax;
 total;
 item_name;
 quantity=1;
 price_t;
 curr_code="prd01";


  ngOnInit() {
    this.products=this.newService.GetProductDetails();
    
    if(this.products != undefined){
      for(var i=0;i<this.products.length;i++){
        this.p_code.push(this.products[i].code);
       //console.log("pro",this.p_code)
      }
    }
    
    
  }

  ProductCodeForm = this.fb.group({
    name: ['']
  })
  QuantityForm = this.fb.group({
    unit: ['']
  })

  onSubmit() {
    alert(JSON.stringify(this.ProductCodeForm.value))
  }
  onChange(e){
   // console.log("change",e.target.value)
 this.curr_code=e.target.value;

    for(var j=0;j<this.products.length;j++){
      if(this.products[j].code == e.target.value){
        this.price=parseInt(this.products[j].price);
        this.price_t=parseInt(this.products[j].price)*this.quantity;
        this.item_name=this.products[j].name;
        this.tax=(8/100)*this.price_t;
        this.total=(this.tax+this.price)*this.quantity;
      }
    }

  }

  onChangeUnit(event){
    console.log("unit",event.target.value)
    this.quantity=event.target.value;

    for(var j=0;j<this.products.length;j++){
      if(this.products[j].code == this.curr_code){
        this.price=parseInt(this.products[j].price);
        this.price_t=parseInt(this.products[j].price)*this.quantity;
        this.item_name=this.products[j].name;
        this.tax=(8/100)*this.price_t;
        this.total=(this.tax+this.price)*this.quantity;
      }
    }
  }

}
