import { Component, AfterViewChecked } from '@angular/core';

import {MdButtonModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  onThemeChange(){
    var target_obj = document.getElementsByClassName('ace_scroller')[0];
    var color = getComputedStyle(target_obj).backgroundColor;
  }
}
