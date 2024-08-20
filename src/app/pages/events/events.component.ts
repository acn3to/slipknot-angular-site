import { Component } from '@angular/core';

@Component({
  selector: 'app-events-page',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events = [
    { date: 'August 25, 2024', venue: 'Madison Square Garden', location: 'New York, NY' },
    { date: 'September 10, 2024', venue: 'The Forum', location: 'Los Angeles, CA' },
    { date: 'October 5, 2024', venue: 'O2 Arena', location: 'London, UK' },
    { date: 'November 12, 2024', venue: 'Allstate Arena', location: 'Chicago, IL' },
    { date: 'December 1, 2024', venue: 'Barclays Center', location: 'Brooklyn, NY' },
    { date: 'January 15, 2025', venue: 'Bell Centre', location: 'Montreal, QC' },
  ];

  buyTicket(event: any) {
    console.log(`Buying ticket for event at ${event.venue} on ${event.date}`);
  }
}
