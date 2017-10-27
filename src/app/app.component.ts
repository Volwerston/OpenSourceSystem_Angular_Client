import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'my-app',
  templateUrl: `./templates/app.html`
})
export class AppComponent  {
	constructor(private _router:Router){}
}
