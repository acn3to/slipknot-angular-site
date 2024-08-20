import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-album-modal',
  templateUrl: './album-modal.component.html',
  styleUrls: ['./album-modal.component.scss']
})
export class AlbumModalComponent {
  @Input() isVisible: boolean = false;
  @Input() album: any = null;
  @Output() close = new EventEmitter<void>();

  @ViewChild('audioPlayer') audioPlayer: ElementRef<HTMLAudioElement> | undefined;

  currentTrack: any = null;
  isPlaying: boolean = false;

  closeModal() {
    this.close.emit();
    this.currentTrack = null;
    this.isPlaying = false;
  }

  playTrack(track: any) {
    this.currentTrack = track;
    const audio = this.audioPlayer?.nativeElement;
    if (audio) {
      audio.src = track.preview_url;
      audio.play();
      this.isPlaying = true;
    }
  }

  playPause() {
    const audio = this.audioPlayer?.nativeElement;
    if (audio) {
      if (this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      this.isPlaying = !this.isPlaying;
    }
  }
}
