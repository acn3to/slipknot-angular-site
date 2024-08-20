import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiService {
  private baseUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) { }

  public getArtist(artistId: string): Observable<any> {
    const accessToken = localStorage.getItem('spotify_token');
    if (!accessToken) {
      throw new Error('Access token is missing');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`,
    });

    return this.http.get<any>(`${this.baseUrl}/artists/${artistId}`, { headers });
  }

  public getArtistAlbums(artistId: string): Observable<any> {
    const accessToken = localStorage.getItem('spotify_token');
    if (!accessToken) {
      throw new Error('Access token is missing');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`,
    });

    return this.http.get<any>(`${this.baseUrl}/artists/${artistId}/albums`, { headers });
  }

  public getAlbumTracks(albumId: string): Observable<any> {
    const accessToken = localStorage.getItem('spotify_token');
    if (!accessToken) {
      throw new Error('Access token is missing');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`,
    });

    return this.http.get<any>(`${this.baseUrl}/albums/${albumId}/tracks`, { headers });
  }

  public getTrack(trackId: string): Observable<any> {
    const accessToken = localStorage.getItem('spotify_token');
    if (!accessToken) {
      throw new Error('Access token is missing');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`,
    });

    return this.http.get<any>(`${this.baseUrl}/tracks/${trackId}`, { headers });
  }
}
