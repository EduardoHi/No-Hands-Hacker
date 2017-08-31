webpackJsonp([1],{0:function(t,e,o){t.exports=o("cDNt")},"3v7k":function(t,e,o){"use strict";var r=o("/oeL"),n=o("Dqrr");o.n(n);o.d(e,"a",function(){return a});var s=this&&this.__decorate||function(t,e,o,r){var n,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(s<3?n(i):s>3?n(e,o,i):n(e,o))||i);return s>3&&i&&Object.defineProperty(e,o,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=(function(){function t(){}}(),function(){function t(t){this.zone=t,this.setSemanticsMap(),this.setCommandsMap()}return t.prototype.setCommandsMap=function(){this.commandsMap=new Map,this.commandsMap.set("jump","1")},t.prototype.checkCommands=function(t){var e,o=t.split(" ");return e=this.findOperator(this.commandsMap,o,0),""!=e&&(this.currentNumber=+e),""!=e},t.prototype.setSemanticsMap=function(){this.currentNumber=0,this.operatorsMap=new Map;var t=new Map;t.set("parenthesis","("),t.set("parentheses","("),t.set("bracket","["),t.set("brace","{"),this.operatorsMap.set("open",t),this.operatorsMap.set("opening",t),t=new Map,t.set("parenthesis",")"),t.set("parentheses",")"),t.set("bracket","]"),t.set("brace","}"),this.operatorsMap.set("close",t),this.operatorsMap.set("closing",t),t=new Map,t.set("or","| "),t.set("exclusive","^ "),t.set("and","& ");var e=new Map;e.set("shift","<< "),t.set("left",e),e=new Map,e.set("shift",">> "),t.set("right",e),this.operatorsMap.set("bitwise",t),t=new Map,this.operatorsMap.set("plus","+ "),this.operatorsMap.set("minus","- "),this.operatorsMap.set("times","* "),t=new Map,t.set("by","/ "),this.operatorsMap.set("divided",e),this.operatorsMap.set("divides","/ "),e=new Map,e.set("by","// "),t=new Map,t.set("divided",e),this.operatorsMap.set("floor",t),this.operatorsMap.set("module","% "),this.operatorsMap.set("modulus","% "),this.operatorsMap.set("modulus","% "),this.operatorsMap.set("modulo","% ");var o=new Map;e=new Map,t=new Map,o.set("of","** "),e.set("power",o),e.set("power","** "),t.set("the",e),this.operatorsMap.set("to",t),this.operatorsMap.set("^","**"),this.operatorsMap.set("power","** "),this.operatorsMap.set("colon",":"),this.operatorsMap.set("semicolon",";"),t=new Map,t.set("loop","for"),t.set("Loop","for"),this.operatorsMap.set("four",t),this.operatorsMap.set("for",t),this.operatorsMap.set("equals","== "),o=new Map,e=new Map,o.set("from","!= "),e.set("different",o),this.operatorsMap.set("is",e),this.operatorsMap.set("not","!"),t=new Map,e=new Map,t.set("than","< "),this.operatorsMap.set("smaller",t),t=new Map;var r=new Map;e=new Map,e.set("than","<= "),t.set("equal",e),r.set("or",t),this.operatorsMap.set("smaller",t),this.operatorsMap.set("smaller",r),t=new Map,e=new Map,t.set("than"," > "),this.operatorsMap.set("greater",t),t=new Map,r=new Map,e=new Map,e.set("than"," >= "),t.set("equal",e),r.set("or",t),this.operatorsMap.set("greater",t),this.operatorsMap.set("and","&& "),this.operatorsMap.set("or","|| "),this.operatorsMap.set("greater",r)},t.prototype.record=function(){var t=this;return n.Observable.create(function(e){var o=window.webkitSpeechRecognition;t.speechRecognition=new o,t.speechRecognition.continuous=!0,t.speechRecognition.lang="en-us",t.speechRecognition.maxAlternatives=1,t.speechRecognition.onresult=function(o){var r={message:" ",status:0};if(o.results){var n=o.results[o.resultIndex],s=n[0].transcript;console.log(s),t.checkCommands(s),s=t.semantics(s),console.log(s),n.isFinal&&(n[0].confidence<.3?console.log("Unrecognized result - Please try again"):(r.message=s,r.status=t.currentNumber))}t.zone.run(function(){e.next(r)})},t.speechRecognition.onerror=function(t){e.error(t)},t.speechRecognition.onend=function(){e.complete()},t.speechRecognition.start(),console.log("Say something - We are listening !!!")})},t.prototype.findOperator=function(t,e,o){return o==e.length?"":(t=t,t.has(e[o])?"string"==typeof t.get(e[o])?t.get(e[o]):this.findOperator(t.get(e[o]),e,o+1):"")},t.prototype.getAdvance=function(t,e,o){return o==e.length?0:t.has(e[o])?"string"==typeof t.get(e[o])?0:this.getAdvance(t.get(e[o]),e,o+1)+1:0},t.prototype.semantics=function(t){for(var e,o=t.split(" "),r="",n=0;n<o.length;n++)e=this.findOperator(this.operatorsMap,o,n),""==e?r+=o[n]+" ":(r+=e,n+=this.getAdvance(this.operatorsMap,o,n));return r},t.prototype.DestroySpeechObject=function(){this.speechRecognition&&this.speechRecognition.stop()},t}());a=s([o.i(r.i)(),i("design:paramtypes",["function"==typeof(c=void 0!==r.j&&r.j)&&c||Object])],a);var c},"SVZ/":function(t,e,o){"use strict";var r=o("/oeL");o.d(e,"a",function(){return i});var n=this&&this.__decorate||function(t,e,o,r){var n,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(s<3?n(i):s>3?n(e,o,i):n(e,o))||i);return s>3&&i&&Object.defineProperty(e,o,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){this.message="status",this.status=0}return t}();n([o.i(r.l)(),s("design:type",String)],i.prototype,"message",void 0),i=n([o.i(r.n)({selector:"status-bar",template:"\n        <h2>{{message}}</h2>\n    ",styles:['h2 { background-color: azure; border-color: "blue" } ']}),s("design:paramtypes",[])],i)},UBAU:function(t,e,o){"use strict";var r=o("/oeL"),n=o("Xq7M"),s=(o.n(n),o("LtXr")),i=(o.n(s),o("SRt/")),a=(o.n(i),o("ISJ3")),c=(o.n(a),o("GWCl")),p=(o.n(c),o("FUkS")),u=(o.n(p),o("yF/F")),l=o("3v7k");o.d(e,"a",function(){return f});var d=this&&this.__decorate||function(t,e,o,r){var n,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(s<3?n(i):s>3?n(e,o,i):n(e,o))||i);return s>3&&i&&Object.defineProperty(e,o,i),i},h=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t,e){this.teService=t,this.srService=e,this.text="",this.consoleOutput="",this.consoleOptions={enableBasicAutocompletion:!1,enableSnippets:!1,enableLiveAutocompletion:!1,readOnly:!0},this.options={enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0}}return t.prototype.ngAfterViewInit=function(){this.activateSpeech(),this.createFolder(),this.editor.setTheme("monokai"),this.editor.getEditor().setValue("print 'Hello, World !'"),this.editor1.getEditor().renderer.setShowGutter(!1),this.editor1.getEditor().renderer.setShowPrintMargin(!1),this.editor1.getEditor().set(!1);var t=this;this.editor.getEditor().commands.addCommand({name:"runProgram",bindKey:"Alt-R",exec:function(e){console.log("RUN"),t.runFile()}})},t.prototype._onPress=function(){},t.prototype.activateSpeech=function(){var t=this,e=this.editor.getEditor();this.srService.record().subscribe(function(t){e.setValue(e.getValue()+t.message+" ",1)},function(e){console.log(e),"no-speech"==e.error&&(console.log("--restarting service--"),t.activateSpeech())},function(){console.log("--complete--"),t.activateSpeech()})},t.prototype.createFolder=function(){this.teService.createFolder().subscribe(function(t){t.success&&console.log(t)},function(t){return console.log(t)})},t.prototype.runFile=function(){var t=this,e=this;this.teService.addFile(this.editor.text).subscribe(function(o){t.teService.runFile().subscribe(function(t){console.log(t),e.editor1.getEditor().setValue(t+"\n",1)},function(t){console.log(t)})},function(t){return console.log(t)})},t}();d([o.i(r.y)("editor"),h("design:type",Object)],f.prototype,"editor",void 0),d([o.i(r.y)("editor1"),h("design:type",Object)],f.prototype,"editor1",void 0),f=d([o.i(r.n)({selector:"text-editor",template:o("cs1O"),styles:["\n    .header-button{\n        display: inline;\n        min-width: 90px;\n    }"],providers:[u.a,l.a]}),h("design:paramtypes",["function"==typeof(g=void 0!==u.a&&u.a)&&g||Object,"function"==typeof(m=void 0!==l.a&&l.a)&&m||Object])],f);var g,m},"aR8+":function(t,e,o){"use strict";var r=o("fc+i"),n=o("/oeL"),s=o("bm2B"),i=o("CPp0"),a=o("Z04r"),c=o("wQAS"),p=o("FHn3"),u=(o.n(p),o("UBAU")),l=o("SVZ/");o.d(e,"a",function(){return h});var d=this&&this.__decorate||function(t,e,o,r){var n,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(s<3?n(i):s>3?n(e,o,i):n(e,o))||i);return s>3&&i&&Object.defineProperty(e,o,i),i},h=function(){function t(){}return t}();h=d([o.i(n.b)({declarations:[c.a,u.a,l.a],imports:[r.a,p.AceEditorModule,s.a,i.a,a.a],providers:[],bootstrap:[c.a]})],h)},cDNt:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o("/oeL"),n=o("Qa4U"),s=o("aR8+");o("p5Ee").a.production&&o.i(r.a)(),o.i(n.a)().bootstrapModule(s.a)},cs1O:function(t,e){t.exports='<div class="container-fluid" style="margin:4px">\r\n    <div class="row">\r\n        <div class="header-button"><button (click)="_onPress()" md-button class="md-primary">Run</button></div>\r\n        <div class="header-button"><button (click)="_onPress()" md-button class="md-primary">Open</button></div>\r\n        <div class="header-button"><button (click)="_onPress()" md-button class="md-primary">Download</button></div>\r\n    </div>\r\n    <h3 style="font-family:Verdana;color:azure">Console:</h3>\r\n</div>\r\n    <ace-editor\r\n        [options]="consoleOptions"\r\n        [(text)]="consoleOutput"\r\n        #editor1\r\n        style="margin-bottom:10px; height:10vh; width:100%;overflow: auto;"\r\n    ></ace-editor>\r\n    <ace-editor\r\n    mode="python"\r\n    [options]="options"\r\n    [(text)]="text"\r\n    #editor\r\n    style=" height:100vh; width:100%;overflow: auto;"\r\n    >\r\n    </ace-editor>'},efyd:function(t,e){t.exports='\x3c!--The content below is only a placeholder and can be replaced.--\x3e\n<div style="background-color:#393a35">\n  <h1 style="font-family:Verdana;color:azure">\n    No Hands Hacker\n  </h1>\n  <div>\n    <text-editor></text-editor>\n  </div>\n</div>'},hxJY:function(t,e,o){e=t.exports=o("rP7Y")(!1),e.push([t.i,".header-button{display:inline;min-width:90px}",""]),t.exports=t.exports.toString()},n7du:function(t,e){function o(t){throw new Error("Cannot find module '"+t+"'.")}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id="n7du"},p5Ee:function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r={production:!1}},wQAS:function(t,e,o){"use strict";var r=o("/oeL");o.d(e,"a",function(){return s});var n=this&&this.__decorate||function(t,e,o,r){var n,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(s<3?n(i):s>3?n(e,o,i):n(e,o))||i);return s>3&&i&&Object.defineProperty(e,o,i),i},s=function(){function t(){this.title="app"}return t}();s=n([o.i(r.n)({selector:"app-root",template:o("efyd"),styles:[o("hxJY")]})],s)},"yF/F":function(t,e,o){"use strict";var r=o("/oeL"),n=o("CPp0"),s=o("S7im"),i=(o.n(s),o("5v8a")),a=(o.n(i),o("xpf9")),c=(o.n(a),o("bKpL"));o.n(c);o.d(e,"a",function(){return l});var p=this&&this.__decorate||function(t,e,o,r){var n,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(s<3?n(i):s>3?n(e,o,i):n(e,o))||i);return s>3&&i&&Object.defineProperty(e,o,i),i},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.http=t,this.address="http://8f115e04.ngrok.io/api/v1/",this.options=new n.c({headers:this.headers})}return t.prototype.addFile=function(t){return this.http.post(this.address+"receiveScript?foldername=1234&scriptCount=3",t,this.options).map(this.extractData).catch(this.handleError)},t.prototype.runFile=function(){return this.http.get(this.address+"executeCode?foldername=1234&scriptCount=3",this.options).map(function(t){return t.text()}).catch(this.handleError)},t.prototype.createFolder=function(){return this.http.post(this.address+"createFolder?foldername=XXXXX",this.options).map(this.extractData).catch(this.handleError)},t.prototype.getFolder=function(){return this.http.get(this.address+"executeCode?foldername=1234",this.options).map(this.extractData).catch(this.handleError)},t.prototype.extractData=function(t){},t.prototype.handleError=function(t){return c.Observable.throw(t)},t}();l=p([o.i(r.i)(),u("design:paramtypes",["function"==typeof(d=void 0!==n.b&&n.b)&&d||Object])],l);var d}},[0]);