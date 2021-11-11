import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
   selector: 'app-ngx',
   templateUrl: './ngx.component.html',
   styleUrls: ['./ngx.component.sass']
})
export class NgxComponent implements OnInit {
   
   modalRef?: BsModalRef;

   isCollapsed = false;

   constructor(private modalService: BsModalService) { }

   ngOnInit(): void {
   }

   openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
   }

}
