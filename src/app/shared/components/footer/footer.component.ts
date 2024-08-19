import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  socialIcons = [
    { name: 'facebook', url: 'https://facebook.com', iconClass: 'fab fa-facebook-f' },
    { name: 'twitter', url: 'https://twitter.com', iconClass: 'fab fa-twitter' },
    { name: 'instagram', url: 'https://instagram.com', iconClass: 'fab fa-instagram' }
  ];

  currentYear: number = new Date().getFullYear();
  isModalVisible: boolean = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
