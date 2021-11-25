import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

@Component({
   selector: 'app-dark-mode',
   templateUrl: './dark-mode.component.html',
   styleUrls: ['./dark-mode.component.sass']
})
export class DarkModeComponent implements OnInit {

   estiloComentado = '/*html, img, video, iframe, button {filter: invert(0.90) hue-rotate(180deg)}*/';
   estiloDescomentado = 'html, img, video, iframe, button {filter: invert(0.90) hue-rotate(180deg)}';
   estiloAtivo = false;
   indexEstilo = 0;


   constructor(library: FaIconLibrary) { 

      let styles = document.getElementsByTagName('style')
         for (let index = 0; index < styles.length; index++) {

            let styleToCheck = document.getElementsByTagName('style')[index].innerHTML;
               if(styleToCheck.includes(this.estiloComentado)) {
               this.indexEstilo = index;
            }
         }

      library.addIcons (
         faAdjust
      ) 
   }

   ngOnInit(): void {
   }

   recuperaDarkModeCssEtoggle(event: any) {
      event.stopPropagation(); 
      console.log(event);
      if (!this.estiloAtivo) { 
         let darkMode = document.getElementsByTagName('style')[this.indexEstilo].innerHTML
         console.log(darkMode)
         darkMode = darkMode.replace(this.estiloComentado, this.estiloDescomentado)
         document.getElementsByTagName('style')[this.indexEstilo].innerHTML = darkMode
         this.estiloAtivo = !this.estiloAtivo;
         return

      } else {
         let darkModeDescomentado = document.getElementsByTagName('style')[this.indexEstilo].innerHTML
         console.log(darkModeDescomentado)
         darkModeDescomentado = darkModeDescomentado.replace(this.estiloDescomentado, this.estiloComentado)
         document.getElementsByTagName('style')[this.indexEstilo].innerHTML = darkModeDescomentado
         this.estiloAtivo = !this.estiloAtivo;
         return 
      }
   }

}
