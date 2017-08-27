import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {MdButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AceEditorDirective, AceEditorComponent, AceEditorModule } from 'ng2-ace-editor'; 
import { TextEditorComponent } from "app/components/TextEditor/texteditor.component";


@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
  ],
  imports: [
    BrowserModule,
    AceEditorModule,
    HttpModule,
    MdButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
