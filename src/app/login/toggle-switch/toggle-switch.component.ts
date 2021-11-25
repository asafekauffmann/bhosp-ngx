import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-toggle-switch',
   templateUrl: './toggle-switch.component.html',
   styleUrls: ['./toggle-switch.component.sass']
})
export class ToggleSwitchComponent implements OnInit {

   estiloComentado = '/*html, img, video, iframe, button {filter: invert(0.90) hue-rotate(180deg)}*/';
   estiloDescomentado = 'html, img, video, iframe, button {filter: invert(0.90) hue-rotate(180deg)}';
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

   ngOnInit(): void {
      /* let referenciaAngular = this;
      const apps: HTMLElement = document.getElementById('darkSwitch') as HTMLElement
      apps.addEventListener('click', function() {
         referenciaAngular.recuperaDarkModeCssEtoggle()
      }) */

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

   /* adicionaDarkMode(this: any) {
      const darkMode =  this.recuperaDarkModeCssEtoggle()
      this.darkMode = darkMode.replace(this.styleComent, this.styleToAdd)
   }

   removeDarkMode(this: any) {
      let darkMode =  this.threcuperaDarkModeCssEtoggle()
      darkMode = darkMode.replace(this.styleToAdd, this.styleComent)
   } */
} 








