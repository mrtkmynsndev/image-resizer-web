import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


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

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }


  onFileChange(pFileList: File[] | any){
    this.files = Object.keys(pFileList).map((key, indx) => pFileList[indx]);
    // this._snackBar.open("Successfully upload!", 'Close', {
    //   duration: 2000,
    // });
  }

  deleteFile(f: any) {
    // this.files = this.files.filter(function(w){ return w.name != f.name });
    // this._snackBar.open("Successfully delete!", 'Close', {
    //   duration: 2000,
    // });
  }

  openConfirmDialog(template: TemplateRef<any>, pIndex : any): void {
    // const dialogRef = this.dialog.open(DialogConfirmComponent, {
    //   panelClass: 'modal-xs'
    // });
    // dialogRef.componentInstance.fName = this.files[pIndex].name;
    // dialogRef.componentInstance.fIndex = pIndex;


    // dialogRef.afterClosed().subscribe(result => {
    //   if (result !== undefined) {
    //     this.deleteFromArray(result);
    //   }
    // });
   
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    this.dialogMessage = this.files[pIndex].name
  }

  deleteFromArray(index: number) {
    // console.log(this.files);
    // this.files.splice(index, 1);
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef?.hide();
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }
}
