import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FileDragNDropDirective } from './shared/directives/file-drag-drop.directive';
import { FormsModule } from '@angular/forms';
import { FileUploaderComponent } from './shared/components/file-uploader/file-uploader.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from './shared/components/modal-content/modal-content.component';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    FileDragNDropDirective,
    FileUploaderComponent,
    ModalContentComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ImageCropperModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(
      {
        positionClass: 'toast-bottom-center',
        closeButton:true,
        progressBar:true
      }
    ),
  ],
  exports: [FileUploaderComponent, ProgressBarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
