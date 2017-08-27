import { Component,ViewChild, AfterViewInit } from '@angular/core';

import 'brace';
import 'brace/ext/language_tools';
import 'brace/mode/python';
import 'brace/theme/terminal';
import 'ace-builds/src-min-noconflict/snippets/python';
import 'ace-builds/src-min-noconflict/snippets/text';
import { TextEditorService } from './texteditor.service';

@Component({
    selector: 'text-editor',        
    template: `
    <ace-editor
    mode="python"
    [options]="options"
    [(text)]="text"
    #editor 
    style=" height:100vh; width:100%;overflow: auto;"
    >
    </ace-editor>
    `,
    providers: [TextEditorService],
})
export class TextEditorComponent implements AfterViewInit {
    @ViewChild('editor') editor;
    text:string = "";
    options: any = {
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
    };

    constructor(private teService: TextEditorService){ }

    ngAfterViewInit() {
        console.log(this.editor);
        this.editor.setTheme("monokai");

        this.editor.getEditor().commands.addCommand({
            name: "showOtherCompletions",
            bindKey: "Ctrl-.",
            exec: function (editor) {
            }
        })

    }

}