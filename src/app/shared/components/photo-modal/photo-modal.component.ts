import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss']
})
export class PhotoModalComponent {
  @Input() isVisible: boolean = false;
  @Input() imageSrc: string | null = null;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
