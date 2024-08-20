import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SpotifyAuthService {
  private clientId = import.meta.env['NG_APP_SPOTIFY_CLIENT_ID'];
  private clientSecret = import.meta.env['NG_APP_SPOTIFY_CLIENT_SECRET'];
  private redirectUri = 'http://localhost:4200/callback';
  private tokenUrl = 'https://accounts.spotify.com/api/token';

  constructor(private http: HttpClient, private router: Router) { }

  public requestAccessToken(): Observable<any> {
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', this.clientId);
    body.set('client_secret', this.clientSecret);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<any>(this.tokenUrl, body.toString(), { headers });
  }

  public login(): void {
    const scopes = 'user-read-private user-read-email';
    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${this.clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(this.redirectUri)}`;
    window.location.href = authUrl;
  }

  public handleAuthCallback(): void {
    const hash = window.location.hash.substring(1);
    console.log('URL Hash:', hash);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');
    console.log('Access Token:', accessToken);

    if (accessToken) {
      localStorage.setItem('spotify_token', accessToken);
      this.router.navigate(['/']);
    } else {
      console.error('Access token not found in URL');
    }
  }

  public getAccessToken(): string | null {
    const token = localStorage.getItem('spotify_token');
    console.log('Stored Access Token:', token);
    return token;
  }

  public logout(): void {
    localStorage.removeItem('spotify_token');
    this.router.navigate(['/']);
  }
}
