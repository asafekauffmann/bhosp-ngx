import { Component, OnInit } from '@angular/core';

declare const recuperaDarkModeCssEtoggle: any; 

@Component({
   selector: 'app-toggle-switch',
   templateUrl: './toggle-switch.component.html',
   styleUrls: ['./toggle-switch.component.sass']
})
export class ToggleSwitchComponent implements OnInit {
   
   callFun(): void {
      recuperaDarkModeCssEtoggle();
   }  
   constructor() {
      
   }

   ngOnInit(): void {
   }
      
}






