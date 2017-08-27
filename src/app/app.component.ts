import { Component, AfterViewChecked } from '@angular/core';

import {MdButtonModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked{
  title = 'app';

  ngAfterViewChecked(){
    var target_obj = document.getElementsByClassName('ace_scroller')[0];
    var color = getComputedStyle(target_obj).backgroundColor;
    console.log(color);
  }
}
