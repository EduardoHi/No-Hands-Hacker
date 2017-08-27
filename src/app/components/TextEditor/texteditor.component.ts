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
    templateUrl: './texteditor.component.html',
    styles: [`
    .header-button{
        display: inline;
        min-width: 90px;
    }`],
    providers: [TextEditorService,SpeechRecognitionService],
})
export class TextEditorComponent implements AfterViewInit {
    @ViewChild('editor') editor;
    @ViewChild('editor1') editor1;
    text:string = "";
    consoleOutput:string = "";

    consoleOptions: any = {
        enableBasicAutocompletion: false,
        enableSnippets: false,
        enableLiveAutocompletion: false,
        readOnly: true,
    };
    
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
        this.editor.setTheme("monokai");
        this.editor.getEditor().setValue("print 'Hello, World !'");
        
        this.editor1.getEditor().renderer.setShowGutter(false);
        this.editor1.getEditor().renderer.setShowPrintMargin(false);
        this.editor1.getEditor().set(false);

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
            }
        },
        error => console.log(error)
        );
    }
    
    runFile(){
        var that = this;
        this.teService.addFile(this.editor.text)
        .subscribe(
        (result) => {
            this.teService.runFile().subscribe(
                (resp) => {
                    console.log(resp);
                    that.editor1.getEditor().setValue(resp+'\n', 1);
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