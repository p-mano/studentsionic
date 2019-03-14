import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
 
customers:any=[{ id: 11, name: 'Mr. Nice',email:'nick@email.com', mobile:'23124235',address:'silk board bilwara' },
{ id: 12, name: 'Narco',email:'narco@email.com', mobile:'23124235',address:'silk board bilwara' }];



  getCustomers(){
    if(localStorage.getItem('customers') != null){
      this.customers=JSON.parse(localStorage.getItem('customers'));
    } 
    return this.customers;
  }
  updateCustomer(customer){
    for(var i = 0; i < this.customers.length; i++){
      if(this.customers[i].id == customer.id){

        this.customers[i] = customer;
        localStorage.setItem('customers',JSON.stringify(this.customers));
        break;
      }
    }
  }
  addCustomer(customer){
    customer.id = Math.round(Math.random()*1000000);
    this.customers.push(customer);
    localStorage.setItem('customers',JSON.stringify(this.customers));
  }

  deleteCustomer(customer){
    console.log('iam here');    
    for(var i = 0; i<this.customers.length; i++){
      if(this.customers[i].id == customer.id){
        this.customers.splice(i,1) ;
        }
    }
    localStorage.setItem('customers',JSON.stringify(this.customers));
  }
  getCustomerById(id){
    for(var i=0;i<this.customers.length;i++){
      if(this.customers[i].id==id){
        return this.customers[i];
        break;
      }
    }
  }
}
