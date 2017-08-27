import { Component,ViewChild, AfterViewInit } from '@angular/core';

import 'brace';
import 'brace/ext/language_tools';
import 'brace/mode/python';
import 'brace/theme/terminal';
import 'ace-builds/src-min-noconflict/snippets/python';
import 'ace-builds/src-min-noconflict/snippets/text';
import { TextEditorService } from './texteditor.service';
import { SpeechRecognitionService } from './speechrecognition.service';

@Component({
    selector: 'text-editor',
    template: `
    <button (click)="_onPress()" md-button class="md-primary">Run</button>
    <ace-editor
    mode="python"
    [options]="options"
    [(text)]="text"
    #editor
    style=" height:100vh; width:100%;overflow: auto;"
    >
    </ace-editor>
    `,
    providers: [TextEditorService,SpeechRecognitionService],
})
export class TextEditorComponent implements AfterViewInit {
    @ViewChild('editor') editor;
    text:string = "";
    doc: File;
    speechData: string;

    options: any = {
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
    };

    constructor(private teService: TextEditorService, private srService:     SpeechRecognitionService){

     }

    ngAfterViewInit() {
        this.activateSpeechSearchMovie();
        this.createFolder();
        console.log(this);
        console.log(this.editor);
        this.editor.setTheme("monokai");
        var that = this;

        this.editor.getEditor().commands.addCommand(
            {
                name: "runProgram",
                bindKey: "Alt-R",
                exec: function (editor) {
                    console.log("RUN");
                    that.runFile();
                }
            }
        );
        this.editor.getEditor().commands.addCommand(
            {
                name: "new Tab",
                bindKey: "Alt-N",
                exec: function (editor) {
                    console.log(editor);
                    // editor.setDocument( new Document())
                }
            },
        )
    }

    _onPress(){
    }

    activateSpeechSearchMovie(): void {
        let editor = this.editor.getEditor();

        this.srService.record()
            .subscribe(
            //listener
            (value) => {
                editor.setValue(editor.getValue()+value+'\n', 1);
            },
            //errror
            (err) => {
                console.log(err);
                if (err.error == "no-speech") {
                    console.log("--restatring service--");
                    this.activateSpeechSearchMovie();
                }
            },
            //completion
            () => {
                console.log("--complete--");
                this.activateSpeechSearchMovie();
            });
    }

    createFolder(){
        this.teService.createFolder()
        .subscribe(
        result => {
            // this.loading = false;
            if (result.success) {
                console.log(result);
                // this._originalData = result.body;
                //this._originalData2 = _.filter(this._originalData, function (x) { return (!x.type.grouper && x.type.inventoriable) });
            } else {
                // this.addToast(result.message);
            }
            //this.products = this._fixOriginalData.slice(0, 10);
        },
        error => console.log(error)
        );
    }
    
    runFile(){
        this.teService.addFile(this.editor.getDocument())
        .subscribe(
        result => {
            // this.loading = false;
            if (result.success) {
                console.log(result);
                // this._originalData = result.body;
                //this._originalData2 = _.filter(this._originalData, function (x) { return (!x.type.grouper && x.type.inventoriable) });
            } else {
                // this.addToast(result.message);
            }
            //this.products = this._fixOriginalData.slice(0, 10);
        },
        error => console.log(error)
        );
    }

}