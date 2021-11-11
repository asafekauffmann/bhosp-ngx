import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//An alias that stores environment vars
//import { ENV } from '@app/env';
 

//Function that calculates de css to load
export function getBrandCSS(styles: string[]): string[] {
   for (let i = 0; i < styles.length; i++) {
      styles[i] = './' + ENV.BRAND + '.' + styles[i];
   }
   return styles;
}

@Component({
   selector: 'app-test-style',
   templateUrl: './test-style.component.html',
   styleUrls: ['./test-style.component.sass']
})
export class TestStyleComponent implements OnInit {

   pageName = 'New Search Page';
   PropfavMovie = 'Gladiator';

   constructor(private _titleSrv: Title) {
      this._titleSrv.setTitle('Search page');
   }

   ngOnInit(): void {
   }

}


/*  This way you can have multiple css files named like this:
> brand1.search.component.css >
   brand2.search.component.css >
   brand3.search.component.css >
   ** * .search.component.css
*/






















