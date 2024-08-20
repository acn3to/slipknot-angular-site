import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit, OnDestroy {
  @Input() trackId: string | null = null;
  isPlaying = false;
  audio: HTMLAudioElement | null = null;
  private navigationSubscription: any;

  constructor(
    private spotifyApiService: SpotifyApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.trackId) {
      this.loadTrack();
    }

    this.navigationSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.stopPlayback();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
    this.stopPlayback();
  }

  loadTrack(): void {
    if (this.trackId) {
      this.spotifyApiService.getTrack(this.trackId).subscribe({
        next: (data) => {
          this.setupAudio(data.preview_url);
        },
        error: (err) => {
          console.error('Error fetching track:', err);
        }
      });
    }
  }

  setupAudio(url: string): void {
    this.audio = new Audio(url);
  }

  togglePlay(): void {
    if (this.audio) {
      if (this.isPlaying) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
      this.isPlaying = !this.isPlaying;
    }
  }

  private stopPlayback(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.isPlaying = false;
    }
  }
}
