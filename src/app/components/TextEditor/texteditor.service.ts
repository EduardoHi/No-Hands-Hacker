import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { HttpResponse } from '../../../models/HttpResponse';
import { File } from '../../../models/File';

@Injectable()

export class TextEditorService {
    private address = "http://40414dcc.ngrok.io/api/v1/";
    private headers;
    private options;

    constructor(private http: Http) {
        // this.headers = new Headers();//{ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        // this.headers.append('UserName', localStorage.getItem('CurrentUser'));
        this.options = new RequestOptions({ headers: this.headers });
    }

    public addFile(body: Document): Observable<HttpResponse> {
        return this.http.post(this.address+"recieveScript?foldername=1234&scriptCount=3", body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    public runFile(): Observable<HttpResponse> {
        return this.http.get(this.address+"executeCode?foldername=1234&scriptCount=3", this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public createFolder(): Observable<HttpResponse> {
        return this.http.post(this.address+"createFolder?foldername=XXXXX", this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getFolder(): Observable<HttpResponse> {
        return this.http.get(this.address+"executeCode?foldername=1234", this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    extractData(res: Response) {
        return res;//.json();
    }
    
    handleError(error: Response | any) {
        return Observable.throw(error);
    }
}


