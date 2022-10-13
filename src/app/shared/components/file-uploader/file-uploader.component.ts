import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  public files: any[] = [];
  modalRef?: BsModalRef;
  message?: string;
  dialogMessage?: string;
  selectedIndex?: any
  @Output() fileEvent = new EventEmitter<string>();


  constructor(private modalService: BsModalService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  onFileChange(pFileList?: File[]) {
    if (pFileList) {
      this.files = Object.keys(pFileList).map((key, indx) => {
        let pFile = pFileList[indx]
        return pFile
      });

      // this.uploadFilesSimulator(0);
      this.toastr.success("Uploaded Successfully!", "", { closeButton: true })
      this.fileEvent.emit()
    }
  }

  onFileBrowser(event: Event) {
    const target = event.currentTarget as HTMLInputElement
    let fileList: FileList | null = target.files
    if (fileList) {
      this.files = Object.keys(fileList).map((key, index) => fileList?[index] : [])
    }
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          console.log(this.files[index].progress)
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 10;
          }
        }, 200);
      }
    }, 1000);
  }


  openConfirmDialog(template: TemplateRef<any>, pIndex: any): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    this.dialogMessage = this.files[pIndex].name
    this.selectedIndex = pIndex
  }

  deleteFromArray(index: number) {
    this.files.splice(index, 1);
  }

  confirm(index: number): void {
    this.deleteFromArray(index)
    this.modalRef?.hide();
    this.toastr.info("File is deleted", "", { closeButton: true })
  }

  decline(): void {
    this.modalRef?.hide();
  }
}
