import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() title: string = '';
  @Input() placeholder: string = '';
  @Input() buttonLabel: string = 'Submit';
  @Input() buttonType: 'button' | 'submit' | 'reset' = 'submit';
  @Input() buttonColor: 'primary' | 'secondary' | 'accent' | 'warn' | 'success' = 'primary';
  @Input() buttonDisabled: boolean = false;
  @Input() buttonIcon?: string;
  @Input() buttonIconPosition: 'left' | 'right' = 'right';
  @Output() submit = new EventEmitter<string>();

  imageUrl: string = '';

  onSubmit() {
    this.submit.emit(this.imageUrl);
  }
}
