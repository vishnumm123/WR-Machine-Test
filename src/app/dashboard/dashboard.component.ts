import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private newService:ServiceService) { }

  ngOnInit( ) {
    this.Sales()
  }


  salesdata;
  Graph_head;
  sales_c=10000;
  inv_co=10000;
  store_c=12000;
  product_c=9500;
  pre_ord=8000;

  lineChartData: ChartDataSets[] = [
    { data: [], label: '' },
  ];

  lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#6C65D9',
      backgroundColor: '#FFFF',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  


  Sales(){


    this.Graph_head= "Total Sales"
    this.salesdata=this.newService.SalesService()


    if(this.salesdata != undefined){

      this.lineChartData[0].data=[];
   
    this.lineChartLabels=[];

      for(var i=0;i<this.salesdata.length;i++){
        this.lineChartData[0].data.push(this.salesdata[i].sales)
        this.lineChartLabels.push(this.salesdata[i].month)
      }
    
    }
    

  }

  invoicesdata
  Invoices(){
    this.Graph_head= "Total Invoices"
    this.invoicesdata=this.newService.InvoicesDetails();
    if(this.invoicesdata != undefined){
  
      this.lineChartData[0].data=[];

    this.lineChartLabels=[];

      for(var i=0;i<this.invoicesdata.length;i++){
        this.lineChartData[0].data.push(this.invoicesdata[i].sales)
        this.lineChartLabels.push(this.invoicesdata[i].month)
      }
  }
}

storesdata
  Stores(){
    this.Graph_head= "Total Stores"
    this.storesdata=this.newService.StotesDetails();
    if(this.storesdata != undefined){
    
      this.lineChartData[0].data=[];

    this.lineChartLabels=[];

      for(var i=0;i<this.storesdata.length;i++){
        this.lineChartData[0].data.push(this.storesdata[i].sales)
        this.lineChartLabels.push(this.storesdata[i].month)
      }
  }
  }
  product_det;
  Product(){
    this.Graph_head= "Total Products"
    this.product_det=this.newService.productDetails();
    if(this.product_det != undefined){
    
      this.lineChartData[0].data=[];
   
    this.lineChartLabels=[];

      for(var i=0;i<this.product_det.length;i++){
        this.lineChartData[0].data.push(this.product_det[i].sales)
        this.lineChartLabels.push(this.product_det[i].month)
      }
  }
  }
purchase_data;
  Pur_Orders(){
    this.Graph_head= "Total Purchase Orders"
    this.purchase_data=this.newService.purchase_order();
    if(this.purchase_data != undefined){
 
      this.lineChartData[0].data=[];
   
    this.lineChartLabels=[];

      for(var i=0;i<this.purchase_data.length;i++){
        this.lineChartData[0].data.push(this.purchase_data[i].sales)
        this.lineChartLabels.push(this.purchase_data[i].month)
      }
  }
  }

}
