import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() album: any;
  @Output() openModal = new EventEmitter<any>();

  onCardClick(): void {
    this.openModal.emit(this.album);
  }
}
