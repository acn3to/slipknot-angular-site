import { NgModule } from '@angular/core';
import { RouterModule, Routes, Scroll } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
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
