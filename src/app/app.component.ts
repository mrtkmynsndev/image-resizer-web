import { Component } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'image-resizer-web';
  rotation = 0;
  containWithinAspectRatio = false;
  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    console.log(event)
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    console.log(event)
    this.croppedImage = event.base64;
  }

  imageLoaded() {
    // show cropper
    console.log("image loaded")

  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  //Image Options

  rotateLeft() {
    // this.canvasRotation--;
    // this.flipAfterRotate();
  }

  rotateRight() {
    // this.canvasRotation++;
    // this.flipAfterRotate();
  }

  flipHorizontal() {
    // this.transform = {
    //     ...this.transform,
    //     flipH: !this.transform.flipH
    // };
  }

  flipVertical() {
    // this.transform = {
    //     ...this.transform,
    //     flipV: !this.transform.flipV
    // };
  }

  resetImage() {
    // this.scale = 1;
    // this.rotation = 0;
    // this.canvasRotation = 0;
    // this.transform = {};
  }

  zoomOut() {
    // this.scale -= .1;
    // this.transform = {
    //     ...this.transform,
    //     scale: this.scale
    // };
  }

  zoomIn() {
    // this.scale += .1;
    // this.transform = {
    //     ...this.transform,
    //     scale: this.scale
    // };
  }

  toggleContainWithinAspectRatio() {
    //this.containWithinAspectRatio = !this.containWithinAspectRatio;
  }

  updateRotation() {
    // this.transform = {
    //     ...this.transform,
    //     rotate: this.rotation
    // };
  }
}
