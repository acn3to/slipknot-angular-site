import { Component, OnInit } from '@angular/core';
import { SpotifyAuthService } from './services/spotify-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'slipknot-music-app';

  constructor(private spotifyAuthService: SpotifyAuthService) { }

  ngOnInit(): void {
    this.requestAccessToken();
  }

  requestAccessToken(): void {
    this.spotifyAuthService.requestAccessToken().subscribe({
      next: (response) => {
        console.log('Access Token Response:', response);
        localStorage.setItem('spotify_token', response.access_token);
      },
      error: (err) => {
        console.error('Error requesting access token:', err);
      }
    });
  }
}
