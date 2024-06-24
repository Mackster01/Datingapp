import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true, //added 06/22/2024
 imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient); // added 06/22/2024
  title = 'DatingApp';
  users: any;

  //constructor(private http: HttpClient) {}

  
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
    next: response => this.users = response, 
    error: error => console.log(error),
    complete: () => console.log('Request has Completed')
    
    })
  }
}
