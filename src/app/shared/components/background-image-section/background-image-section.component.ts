import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-background-image-section',
  templateUrl: './background-image-section.component.html',
  styleUrls: ['./background-image-section.component.scss']
})
export class BackgroundImageSectionComponent {
  @Input() backgroundImage?: string;
  @Input() backgroundColor: string = '#000000';
}
