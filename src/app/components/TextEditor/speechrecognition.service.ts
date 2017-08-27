import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as _ from "lodash";


interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

class speechResponse {
    message: string;
    status: number;
}

@Injectable()
export class SpeechRecognitionService {
    speechRecognition: any;
    operatorsMap: Map<String, Object>;
    commandsMap: Map <String, Object>
    currentNumber: number;

    constructor(private zone: NgZone) {
        this.setSemanticsMap();
        this.setCommandsMap();
    }
    
    setCommandsMap(){
        this.commandsMap = new Map();
        this.commandsMap.set("jump", "1");
    }
    checkCommands(transcript: string): boolean{
        var splitted = transcript.split(" ");
        var result = "", tmp: string;
        tmp = <string>this.findOperator(this.commandsMap, splitted, 0);
        if(tmp  != "")
            this.currentNumber = +tmp;
        return tmp != "";
    }
    setSemanticsMap(){    
        this.currentNumber = 0;   
        this.operatorsMap = new Map<String, Object>();
        var tmp: Map<String, Object> = new Map<String, Object>();
        tmp.set("parenthesis", "(");
        tmp.set("parentheses", "(");
        tmp.set("bracket", "[");
        tmp.set("brace", "{");
        this.operatorsMap.set("open", tmp);
        this.operatorsMap.set("opening", tmp);
        
        tmp = new Map<String, Object>();
        tmp.set("parenthesis", ")");
        tmp.set("parentheses", ")");
        tmp.set("bracket", "]");
        tmp.set("brace", "}");
        this.operatorsMap.set("close", tmp);
        this.operatorsMap.set("closing", tmp);

        tmp = new Map<String, Object>();
        tmp.set("or", "| ");
        tmp.set("exclusive", "^ ");
        tmp.set("and", "& ");
        var subTmp: Map<String, Object> = new Map<String, Object>();
        subTmp.set("shift", "<< ");
        tmp.set("left", subTmp);
        subTmp = new Map<String, Object>();
        subTmp.set("shift", ">> ");
        tmp.set("right", subTmp);  
        this.operatorsMap.set("bitwise", tmp);

        tmp = new Map<String, Object>();
        this.operatorsMap.set("plus", "+ ");
        this.operatorsMap.set("minus", "- ");
        this.operatorsMap.set("times", "* ");
        tmp = new Map<String, Object>();
        tmp.set("by", "/ ");
        this.operatorsMap.set("divided", subTmp);
        this.operatorsMap.set("divides", "/ ");
        subTmp = new Map<String, Object>();
        subTmp.set("by", "// ");
        tmp = new Map<String, Object>();
        tmp.set("divided", subTmp);
        this.operatorsMap.set("floor", tmp);
        this.operatorsMap.set("module", "% ");
        this.operatorsMap.set("modulus", "% ");
        this.operatorsMap.set("modulus", "% ");
        this.operatorsMap.set("modulo", "% ");
        var subSubTmp : Map<String, Object>= new Map<String, Object>();
        subTmp = new Map<String, Object>();
        tmp = new Map<String, Object>();
        subSubTmp.set("of", "** ");
        subTmp.set("power", subSubTmp);
        subTmp.set("power", "** ");
        tmp.set("the", subTmp);
        this.operatorsMap.set("to", tmp);
        this.operatorsMap.set("^", "**");
        this.operatorsMap.set("power", "** ");
        this.operatorsMap.set("colon", ":");
        this.operatorsMap.set("semicolon", ";");

        tmp = new Map();
        tmp.set("loop", "for");
        tmp.set("Loop", "for");
        this.operatorsMap.set("four", tmp);
        this.operatorsMap.set("for", tmp);



        this.operatorsMap.set("equals", "== ");
        subSubTmp = new Map<String, Object>();
        subTmp = new Map<String, Object>();
        subSubTmp.set("from", "!= ");
        subTmp.set("different", subSubTmp);
        this.operatorsMap.set("is", subTmp);
        this.operatorsMap.set("not", "!");

        tmp = new Map<String, Object>();
        subTmp = new Map<String, Object>();
        tmp.set("than", "< ");
        this.operatorsMap.set("smaller", tmp);
        tmp = new Map<String, Object>();
        var secondTmp : Map<String, Object>= new Map();
        subTmp = new Map<String, Object>();
        subTmp.set("than", "<= ");
        tmp.set("equal", subTmp);
        secondTmp.set("or", tmp);
        this.operatorsMap.set("smaller", tmp);
        this.operatorsMap.set("smaller", secondTmp);

        tmp = new Map<String, Object>();
        subTmp = new Map<String, Object>();
        tmp.set("than", " > ");
        this.operatorsMap.set("greater", tmp);
        tmp = new Map<String, Object>();
        secondTmp = new Map<String, Object>();
        subTmp = new Map<String, Object>();
        subTmp.set("than", " >= ");
        tmp.set("equal", subTmp);
        secondTmp.set("or", tmp);
        this.operatorsMap.set("greater", tmp);
        this.operatorsMap.set("and", "&& ");
        this.operatorsMap.set("or", "|| ");
        this.operatorsMap.set("greater", secondTmp);
        console.log(this.operatorsMap.has("or"));
    }

    record(): Observable<speechResponse> {

        return Observable.create(observer => {
            const { webkitSpeechRecognition }: IWindow = <IWindow>window;
            this.speechRecognition = new webkitSpeechRecognition();
            //this.speechRecognition = SpeechRecognition;
            this.speechRecognition.continuous = true;
            //this.speechRecognition.interimResults = true;
            this.speechRecognition.lang = 'en-us';
            this.speechRecognition.maxAlternatives = 1;

            this.speechRecognition.onresult = (speech) => {
                var term = { message: " ", status: 0};
                if (speech.results) {
                    var result = speech.results[speech.resultIndex];
                    var transcript = result[0].transcript;
                    console.log(transcript);
                    this.checkCommands(transcript);
                    transcript = this.semantics(transcript);
                    console.log(transcript);
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            console.log("Unrecognized result - Please try again");
                        }
                        else {
                            term.message = transcript;
                            term.status = this.currentNumber;
                        }
                    }
                }
                this.zone.run(() => {
                    observer.next(term);
                });
            };

            this.speechRecognition.onerror = error => {
                observer.error(error);
            };

            this.speechRecognition.onend = () => {
                observer.complete();
            };

            this.speechRecognition.start();
            console.log("Say something - We are listening !!!");
        });
    }

    findOperator(currentMap, array: String[], ind: number): String{
        if(ind == array.length)
            return "";
        currentMap = <String>currentMap;
        if(currentMap.has(array[ind])){
            if( typeof currentMap.get(array[ind]) == "string")
                return <String>currentMap.get(array[ind]);
            else
                return this.findOperator(currentMap.get(array[ind]), array, ind + 1);
        }
        return "";
    }

    getAdvance(currentMap: Map<String, Object>, array: String[], ind: number): number{
        if(ind == array.length)
            return 0;
        if(currentMap.has(array[ind])){
            if( typeof currentMap.get(array[ind]) =="string")
                return 0;
            else
                return this.getAdvance(<Map<String, Object>>currentMap.get(array[ind]), array, ind + 1) + 1;
        }
        return 0;
    }

    semantics(transcript): string{
        var splitted = transcript.split(" ");
        var result = "", tmp;
        for(var i = 0; i < splitted.length; i++){
            tmp = this.findOperator(this.operatorsMap, splitted, i);
            if(tmp == "")
                result += splitted[i] + " ";
            else{
                result += tmp;
                i += this.getAdvance(this.operatorsMap, splitted, i);
            }
        }
        return result;
    }

    DestroySpeechObject() {
        if (this.speechRecognition)
            this.speechRecognition.stop();
    }

}