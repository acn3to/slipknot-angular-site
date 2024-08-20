import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { SectionComponent } from './components/section/section.component';
import { ContainerComponent } from './components/container/container.component';
import { BackgroundImageSectionComponent } from './components/background-image-section/background-image-section.component';
import { AlbumModalComponent } from './components/album-modal/album-modal.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    CardComponent,
    ModalComponent,
    TableComponent,
    FormComponent,
    SectionComponent,
    ContainerComponent,
    BackgroundImageSectionComponent,
    AlbumModalComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    CardComponent,
    ModalComponent,
    TableComponent,
    FormComponent,
    SectionComponent,
    ContainerComponent,
    BackgroundImageSectionComponent,
    AlbumModalComponent,
    GalleryComponent
  ]
})
export class SharedModule { }
