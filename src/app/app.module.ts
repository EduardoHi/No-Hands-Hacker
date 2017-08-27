import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AceEditorDirective, AceEditorComponent, AceEditorModule } from 'ng2-ace-editor'; 
import { TextEditorComponent } from "app/components/TextEditor/texteditor.component";
import { DropdownComponent } from "app/components/DropDown/dropdown.component";


@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    AceEditorModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
