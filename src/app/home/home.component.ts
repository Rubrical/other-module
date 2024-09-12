import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>Home Page</h2>
    <p>Welcome to the Home page!</p>
    <button (click)="goToAbout()">Go to About Page</button>
  `
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToAbout() {
    this.router.navigate(['/about']);  // Navigate to the About page
  }
}
