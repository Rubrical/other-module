import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';
import { TokenExpiredModalComponent } from './token-expired/token-expired-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  title = 'other-module';

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    window.name = "othermodule";
    window.addEventListener('message', this.handleMessage.bind(this), false);
  }

  handleMessage(event: MessageEvent) {
    if (event.origin === 'http://localhost:4200') {
      const messageData = event.data;

      if (messageData.token) {
        sessionStorage.setItem("token", messageData.token);
        console.log("Token recebido e armazenado:", messageData.token);
      }

      if (messageData.tokenExpired) {
        sessionStorage.removeItem("token");
        this.dialog.open(TokenExpiredModalComponent);
      }

    }
  }

}
