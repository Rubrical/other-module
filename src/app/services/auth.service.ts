import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenExpiredModalComponent } from '../token-expired/token-expired-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private dialog: MatDialog) { }

  handleTokenExpiration(): void {
    const dialogRef = this.dialog.open(TokenExpiredModalComponent);

    dialogRef.afterClosed().subscribe({
      next: result => {
        if (result === "yes") {

        }
      }
    })
  }

}
