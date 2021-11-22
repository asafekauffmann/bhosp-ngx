import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { faHeart, faHotel, faSuitcase, faLaugh } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
   selector: 'app-menu-abertura',
   templateUrl: './menu-abertura.component.html',
   styleUrls: ['./menu-abertura.component.sass']
})
export class MenuAberturaComponent implements OnInit {

   modalRef?: BsModalRef;

   constructor(library: FaIconLibrary, private modalService: BsModalService) {

      library.addIcons (
         faSuitcase,
         faHeart,
         faHotel,
         faLaugh
      )
   }

   ngOnInit(): void {
   }

   openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
   }

}
