import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {
  title?: string
  content?: string
  closeBtnName?: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }


  confirm(): void {
    
  }

  decline(): void {
  }
}
