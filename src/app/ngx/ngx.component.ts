import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
/* import { TimepickerModule } from 'ngx-bootstrap/timepicker'; */

@Component({
   selector: 'app-ngx',
   templateUrl: './ngx.component.html',
   styleUrls: ['./ngx.component.sass']
})
export class NgxComponent implements OnInit {

   /* myTime: Date = new Date();  */
   
   colorTheme = 'theme-green';
   
   bsConfig?: Partial<BsDatepickerConfig>;

   modalRef?: BsModalRef;

   isCollapsed = false;

   constructor(private modalService: BsModalService) { 
      
   }

   ngOnInit(): void {
   }

   openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
   }

   applyTheme(pop: any) {
      this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
      setTimeout(() => {
         pop.show();
      });
    }

  


 

}
