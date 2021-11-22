import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { Component, OnInit } from '@angular/core';
import { faHeart, faHotel, faSuitcase, faLaugh } from '@fortawesome/free-solid-svg-icons';

@Component({
   selector: 'app-menu-abertura',
   templateUrl: './menu-abertura.component.html',
   styleUrls: ['./menu-abertura.component.sass']
})
export class MenuAberturaComponent implements OnInit {

   constructor(library: FaIconLibrary) {

      library.addIcons (
         faSuitcase,
         faHeart,
         faHotel,
         faLaugh
      )
   }

   ngOnInit(): void {
   }

}
