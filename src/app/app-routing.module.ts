import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { BandComponent } from './pages/band/band.component';
import { MusicComponent } from './pages/music/music.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { VideosComponent } from './pages/videos/videos.component';
import { NewsComponent } from './pages/news/news.component';
import { EventsComponent } from './pages/events/events.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'band', component: BandComponent },
  { path: 'music', component: MusicComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
