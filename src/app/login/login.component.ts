import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private newService:ServiceService ,private router:Router) { }

  ngOnInit() {

  }


  Login(event){
    event.preventDefault();
    const target=event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
   
 
    const login = this.newService.Login(username,password);



    if(login == true){
      localStorage.setItem("admin-data","logined");
      this.router.navigate(['/dashboard']);
    }
    else{
      alert("User not found")
    }


  }

}
