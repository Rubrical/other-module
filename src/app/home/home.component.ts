import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>Home Page</h2>
    <p>Welcome to the Home page!</p>
    <button (click)="goToAbout()">Go to About Page</button>
    <button (click)="backDashboard()">Go to dashboard</button>
  `
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToAbout() {
    this.router.navigate(['/about']);  // Navigate to the About page
  }

  backDashboard() {
    let target = window.open("http://localhost:4200", "dashboard");
    target?.postMessage("teste", "http://localhost:4200")
  }
}
