import { NgModule } from '@angular/core';
import { RouterModule, Routes, Scroll } from '@angular/router';
import { BandComponent } from './band/band.component';
import { MusicComponent } from './music/music.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { StoreComponent } from './store/store.component';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

const routes: Routes = [
  { path: 'band', component: BandComponent },
  { path: 'music', component: MusicComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'store', component: StoreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    router.events.pipe(
      filter((event): event is Scroll => event instanceof Scroll)
    ).subscribe(event => {
      if (event.position) {
        viewportScroller.scrollToPosition(event.position);
      } else if (event.anchor) {
        viewportScroller.scrollToAnchor(event.anchor);
      } else {
        viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
