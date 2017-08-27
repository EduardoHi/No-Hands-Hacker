import { Component,ViewChild, AfterViewInit } from '@angular/core';

import 'brace';
import 'brace/ext/language_tools';
import 'brace/mode/python';
import 'brace/theme/terminal';
import 'ace-builds/src-min-noconflict/snippets/python';
import 'ace-builds/src-min-noconflict/snippets/text';
import { TextEditorService } from './texteditor.service';
import { SpeechRecognitionService } from './speechrecognition.service';
import { StatusBarComponent } from '../StatusBar/statusbar.component';

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
    <textarea [(ngModel)]="consoleOutput"></textarea>    
    `,
    providers: [TextEditorService,SpeechRecognitionService],
})
export class TextEditorComponent implements AfterViewInit {
    @ViewChild('editor') editor;
    text:string = "";
    consoleOutput:string = "";

    addEnter(){
        let editor = this.editor.getEditor();
        editor.setValue(editor.getValue() + '\n');
    }

    options: any = {
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
    };

    constructor(private teService: TextEditorService, private srService:     SpeechRecognitionService){

     }

    ngAfterViewInit() {
        this.activateSpeech();
        this.createFolder();
        console.log(this);
        console.log(this.editor);
        this.editor.setTheme("monokai");
        this.editor.getEditor().setValue("print 'Hello, World !'");
        
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
    }

    _onPress(){
        () => {}
    }

    

    activateSpeech(): void {
        let editor = this.editor.getEditor();
        var that = this;
        this.srService.record()
            .subscribe(
            //listener
            (value) => {
                editor.setValue(editor.getValue()+value.message+' ', 1);
                
            },
            //errror
            (err) => {
                console.log(err);
                if (err.error == "no-speech") {
                    console.log("--restarting service--");
                    this.activateSpeech();
                }
            },
            //completion
            () => {
                console.log("--complete--");
                this.activateSpeech();
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
        console.log();
        this.teService.addFile(this.editor.text)
        .subscribe(
        (result) => {
            console.log(result);
            // this.loading = false;
            this.teService.runFile().subscribe(
                (resp) => {
                    console.log(resp);
                    this.consoleOutput = resp.body;
                },
                (error) => {
                    console.log(error);
                }
            )
            
        },
        error => console.log(error)
        );
    }

}