import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleDarkService {

   estiloComentado = '/*html, img, video, iframe, button {filter: invert(0.95) hue-rotate(180deg)}*/';
   estiloDescomentado = 'html, img, video, iframe, button {filter: invert(0.95) hue-rotate(180deg)}';
   estiloAtivo = false;
   indexEstilo = 0;

   constructor() {

      let styles = document.getElementsByTagName('style')
         for (let index = 0; index < styles.length; index++) {

            let styleToCheck = document.getElementsByTagName('style')[index].innerHTML;
               if(styleToCheck.includes(this.estiloComentado)) {
               this.indexEstilo = index;
            }
         }
   }

   recuperaDarkModeCssEtoggle(event: any) {
      //event.stopPropagation(); 
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
