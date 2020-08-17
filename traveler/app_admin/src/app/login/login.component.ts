import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { Authentication } from '../services/authentication'; 
import { User } from '../models/user'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({  selector: 'app-login',  templateUrl: './login.component.html',  styleUrls: ['./login.component.css'] }) 
export class LoginComponent implements OnInit {  
  
  loginForm: FormGroup;
  submitted = false;
  
  public formError: string = '';  
  public credentials = {    
    name: '',    
    email: '',    
    password: ''  
  }; 
   
  
  constructor(   
    private formBuilder: FormBuilder, 
    private router: Router,    
    private authenticationService: Authentication  ) { }  
    ngOnInit() {
      // initialize form    
      console.log('setting up form');
      this.loginForm = this.formBuilder.group({    
        email: ['', Validators.required],    
        password: ['', Validators.required]  
      });
    }  
    
    public onLoginSubmit(): void {    
      console.log('form submitted');
      this.formError = '';    
      if (!this.loginForm.value.email || !this.loginForm.value.password) { 
        console.log('formerror');
        console.log(this.loginForm.value.email);
        this.formError = 'All fields are required, please try again';    
      } else {      
        console.log('attempting login');
        this.doLogin();    
      }     
    }  
    private doLogin(): void {    
      this.credentials.email = this.loginForm.value.email;
      this.credentials.password = this.loginForm.value.password;
      this.authenticationService.login(this.credentials)      
        .then(() => this.router.navigateByUrl('#'))      
        .catch((message) => this.formError = message);  
      } 
    }