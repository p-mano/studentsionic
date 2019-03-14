import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss'],
})
export class AddcustomerComponent implements OnInit {
  customer = {};
  constructor(private CustomerService:CustomerService) {


  }
  addCustomer(customer){
      this.CustomerService.addCustomer(customer);
    }
    
    
  ngOnInit() {}

}
