import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MessageListenerService {
  
  constructor(private auth: AuthService, ) {
    window.addEventListener('message', (e) => {
      console.log(e);
    })
  }

  handleMessage(event: MessageEvent): void {
    if (event.origin === 'http://localhost:4200') {
      console.log('Mensagem recebida:', event.data);

      if (event.data === 'token-expired') {
        this.auth.handleTokenExpiration();
      }
    }
  }

}
