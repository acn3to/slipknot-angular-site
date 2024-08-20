import { Component, OnInit } from '@angular/core';
import { SpotifyAuthService } from 'src/app/services/spotify-auth.service';

@Component({
  selector: 'app-callback',
  template: `<p>Processing...</p>`,
})
export class CallbackComponent implements OnInit {
  constructor(private authService: SpotifyAuthService) { }

  ngOnInit(): void {
    this.authService.handleAuthCallback();
  }
}
