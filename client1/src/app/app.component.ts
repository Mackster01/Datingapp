import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { NgFor } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AccountService } from './_services/account.service';
import { HomeComponent } from './home/home.component';



@Component({
  selector: 'app-root',
  standalone: true, //added 06/22/2024
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NavComponent, HomeComponent]
  
})
export class AppComponent implements OnInit {

  private accountService = inject(AccountService);
  
  

  //constructor(private http: HttpClient) {}

  
  ngOnInit(): void {
   this.setCurrentUser();
    
    }
  
    setCurrentUser() {
      const userString = localStorage.getItem('user');
      if(!userString) return;
      const user = JSON.parse(userString);
      this.accountService.currentUser.set(user);
    }

 
}
