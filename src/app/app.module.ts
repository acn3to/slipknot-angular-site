import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { BandComponent } from './pages/band/band.component';
import { MusicComponent } from './pages/music/music.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { VideosComponent } from './pages/videos/videos.component';
import { NewsComponent } from './pages/news/news.component';
import { EventsComponent } from './pages/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    BandComponent,
    MusicComponent,
    PhotosComponent,
    VideosComponent,
    NewsComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
