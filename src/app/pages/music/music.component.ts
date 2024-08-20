import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';
import { SpotifyAuthService } from 'src/app/services/spotify-auth.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  artistData: any = null;
  albums: any[] = [];
  selectedAlbum: any = null;
  error: string | null = null;

  private artistId = '05fG473iIaoy82BF1aGhL8';

  constructor(
    private spotifyApiService: SpotifyApiService,
    private authService: SpotifyAuthService
  ) { }

  ngOnInit(): void {
    console.log('MusicComponent initialized');
    this.loadArtistData();
  }

  loadArtistData(): void {
    this.spotifyApiService.getArtist(this.artistId).subscribe({
      next: (data) => {
        console.log('Artist Data:', data);
        this.artistData = data;
        this.loadArtistAlbums();
      },
      error: (err) => {
        this.error = 'Error fetching artist data';
        console.error(err);
      }
    });
  }

  loadArtistAlbums(): void {
    this.spotifyApiService.getArtistAlbums(this.artistId).subscribe({
      next: (data) => {
        console.log('Albums Data:', data);
        this.albums = data.items;
      },
      error: (err) => {
        this.error = 'Error fetching albums';
        console.error(err);
      }
    });
  }

  onAlbumClick(album: any): void {
    this.spotifyApiService.getAlbumTracks(album.id).subscribe({
      next: (data) => {
        album.tracks = data.items;
        this.selectedAlbum = album;
      },
      error: (err) => {
        this.error = 'Error fetching album tracks';
        console.error(err);
      }
    });
  }

  closeModal(): void {
    this.selectedAlbum = null;
  }

  getAlbumDetails(): string {
    if (!this.selectedAlbum) return '';

    const album = this.selectedAlbum;
    return `
      <img src="${album.images[0]?.url}" alt="Album Image" />
      <p>Release Date: ${album.release_date}</p>
      <p>Total Tracks: ${album.total_tracks}</p>
      <div>${album.tracks?.map((track: any) => `<p>${track.name}</p>`).join('') || 'No tracks available'}</div>
    `;
  }
}
