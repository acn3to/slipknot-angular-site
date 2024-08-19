import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  socialIcons = [
    { name: 'facebook', url: 'https://facebook.com', iconClass: 'fab fa-facebook-f' },
    { name: 'twitter', url: 'https://twitter.com', iconClass: 'fab fa-twitter' },
    { name: 'instagram', url: 'https://instagram.com', iconClass: 'fab fa-instagram' }
  ];

  navLinks = [
    { label: 'BAND', path: '/band' },
    { label: 'MUSIC', path: '/music' },
    { label: 'PHOTOS', path: '/photos' },
    { label: 'VIDEOS', path: '/videos' },
    { label: 'NEWS', path: '/news' },
    { label: 'EVENTS', path: '/events' }
  ];
}
