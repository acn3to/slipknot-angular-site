import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images: string[] = [];
  imageUrl: string = '';
  selectedImage: string | null = null;

  @ViewChild('fileInput') fileInput!: ElementRef;

  addImage() {
    if (this.imageUrl) {
      this.images.push(this.imageUrl);
      this.imageUrl = '';
    }
  }

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.images.push(e.target?.result as string);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  openImageModal(image: string) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }
}
