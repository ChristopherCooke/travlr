import { Component, OnInit } from '@angular/core'; 
import { Authentication } from '../services/authentication'; 

@Component({  
  selector: 'app-navbar',  
  templateUrl: './navbar.component.html',  
  styleUrls: ['./navbar.component.css'] 
}) 
export class NavbarComponent implements OnInit {  
  constructor(    
    private authenticationService: Authentication  
    ) { }  
    
    ngOnInit() { }  
    
    public isLoggedIn(): boolean {    
      return this.authenticationService.isLoggedIn();  
    }  
    
    private onLogout(): void {    
      return this.authenticationService.logout();  
    } 
  }