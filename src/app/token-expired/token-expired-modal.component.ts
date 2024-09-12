import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-token-expired',
  standalone: true,
  imports: [],
  template: `
    <h1>Session Expired</h1>
    <p>Your session has expired. Do you want to log in again?</p>
    <button mat-button (click)="onYes()">Yes</button>
    <button mat-button (click)="onNo()">No</button>
  `,
  styles: ``
})
export class TokenExpiredModalComponent {

  constructor(private dialogRef: MatDialogRef<TokenExpiredModalComponent>) { }

  onNo() {
    this.dialogRef.close('no');
  }
  onYes() {
    this.dialogRef.close('yes');
  }
}
