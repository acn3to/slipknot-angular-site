import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() title: string = 'Subscribe to our newsletter';
  @Input() placeholder: string = 'Your email';
  @Input() buttonLabel: string = 'Subscribe';
  @Input() buttonType: 'button' | 'submit' | 'reset' = 'submit';
  @Input() buttonColor: 'primary' | 'secondary' | 'accent' | 'warn' | 'success' = 'primary';
  @Input() buttonDisabled: boolean = false;
  @Input() buttonIcon?: string;
  @Input() buttonIconPosition: 'left' | 'right' = 'right';
  @Output() submit = new EventEmitter<string>();

  email: string = '';

  onSubmit() {
    if (this.email) {
      this.submit.emit(this.email);
      this.email = '';
    }
  }
}
