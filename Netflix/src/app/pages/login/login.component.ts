declare var google: any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '796925530276-94m1mqbr79d600ehahlkuvfimn08r9mp.apps.googleusercontent.com',
     callback: (resp: any)=> {
      this.handleLogin(resp)
    }
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 300
    })
  }

  private decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(resp:any){
    if(resp){
      //decode token
      const payload =this.decodeToken(resp.credential);
      //store in session
      sessionStorage.setItem("loggedInUser",JSON.stringify(payload));
      this.router.navigate(["browse"]);
    }
  }

}
