import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-token-expired',
  standalone: true,
  imports: [
    MatDialogModule
  ],
  template: `
    <h2 mat-dialog-title>Session Expired</h2>
    <mat-dialog-content>Your session has expired. Do you want to log in again?</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onYes()">Yes</button>
      <button mat-button (click)="onNo()">No</button>
    </mat-dialog-actions>
  `,
  styles: `
    button
      margin-right: 8px

  `
})
export class TokenExpiredModalComponent {

  constructor(private dialogRef: MatDialogRef<TokenExpiredModalComponent>) { }

  onNo(): void {
    this.dialogRef.close('no');
  }

  onYes(): void {
    this.dialogRef.close('yes');
    let target = window.open("http://localhost:4200/login", "dashboard");
    target?.focus();
  }
}
