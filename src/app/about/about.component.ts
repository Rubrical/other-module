import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h2>About Page</h2>
    <p>This is the About page of the test application.</p>
    <button (click)="goToHome()">Go to Home Page</button>
  `
})
export class AboutComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }
}
