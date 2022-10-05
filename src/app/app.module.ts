import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FileDragNDropDirective } from './shared/directives/file-drag-drop.directive';
import { FormsModule } from '@angular/forms';
import { FileUploaderComponent } from './shared/components/file-uploader/file-uploader.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    FileDragNDropDirective,
    FileUploaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ImageCropperModule,
    ModalModule.forRoot()
  ],
  exports: [FileUploaderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
