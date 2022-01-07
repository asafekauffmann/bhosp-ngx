import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
   selector: 'app-abertura',
   templateUrl: './abertura.component.html',
   styleUrls: ['./abertura.component.sass']
})
export class AberturaComponent implements OnInit {

   constructor(private elementRef: ElementRef) { }



   ngOnInit(): void {
      let test = this.elementRef.nativeElement.querySelector("#app");
      console.log(test);
      // test.show();
   }


   botaoTest() : void {
      let test = this.elementRef.nativeElement.querySelector("#app");
      console.log(test.value);
   }


}
