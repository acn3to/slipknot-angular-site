import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: 'primary' | 'secondary' | 'accent' | 'warn' | 'success' = 'primary';
  @Input() disabled: boolean = false;
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'right';
  @Input() route?: string;

  constructor(private router: Router) { }

  onClick() {
    if (this.route) {
      console.log(this.route)
      this.router.navigate([this.route]);
    }
  }
}
