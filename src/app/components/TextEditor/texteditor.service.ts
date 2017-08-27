import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { HttpResponse } from '../../../models/HttpResponse';

@Injectable()

export class TextEditorService {
    private address = "http://8f115e04.ngrok.io/api/v1/";
    private headers;
    private options;

    constructor(private http: Http) {
        // this.headers = new Headers();//{ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        // this.headers.append('UserName', localStorage.getItem('CurrentUser'));
        this.options = new RequestOptions({ headers: this.headers });
    }

    public addFile(body: Document): Observable<HttpResponse> {
        return this.http.post(this.address+"receiveScript?foldername=1234&scriptCount=3", body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    public runFile(): Observable<String> {
        return this.http.get(this.address+"executeCode?foldername=1234&scriptCount=3", this.options)
            .map(res => res.text())
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
        return ;
    }
    
    handleError(error: Response | any) {
        return Observable.throw(error);
    }
}


