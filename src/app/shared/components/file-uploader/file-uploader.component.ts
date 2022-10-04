import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  public files: any[] = [];

  constructor() { }

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

  openConfirmDialog(pIndex: any): void {
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
  }

  deleteFromArray(index: number) {
    // console.log(this.files);
    // this.files.splice(index, 1);
  }
}
