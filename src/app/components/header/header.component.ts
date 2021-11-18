import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faClipboardCheck, faHome, faQuestionCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

   constructor(library : FaIconLibrary) {
      
      library.addIcons ( 
         faHome, 
         faClipboardCheck, 
         faSearch, 
         faQuestionCircle,
         faAngleDown 
      )
   }

   ngOnInit(): void {
   }

}
