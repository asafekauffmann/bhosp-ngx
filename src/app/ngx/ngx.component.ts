import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
   selector: 'app-ngx',
   templateUrl: './ngx.component.html',
   styleUrls: ['./ngx.component.sass']
})
export class NgxComponent implements OnInit {
   @ViewChild(BsDatepickerDirective, { static: false }) datepicker?: BsDatepickerDirective;
   
   modalRef?: BsModalRef;

   isCollapsed = false;

   constructor(private modalService: BsModalService) { }

   ngOnInit(): void {
   }

   openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
   }

   @HostListener('window:scroll')
   onScrollEvent() {
      this.datepicker?.hide();
   }

}
