import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() backgroundImage?: string;
  @Input() backgroundColor: string = '#000000';
  @Input() textColor: string = '#FFFFFF';
  @Input() title: string | null = null;
  @Input() subtitle: string | null = null;
  @Input() imageSrc: string | null = null;
  @Input() imageAlt: string = '';
  @Input() buttonText: string | null = null;
  @Input() reverse: boolean = false;
  @Input() buttonColor: 'primary' | 'secondary' | 'accent' | 'warn' | 'success' = 'primary';
  @Input() buttonDisabled: boolean = false;
  @Input() buttonIcon?: string;
  @Input() buttonIconPosition: 'left' | 'right' = 'right';
  @Input() contentAlignment: 'center' | 'left' | 'right' = 'center';
}
