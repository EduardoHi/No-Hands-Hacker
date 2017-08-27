import { Component,Input } from '@angular/core';

@Component({
    selector: 'status-bar',
    template: `
        <h2>{{message}}</h2>
    `,
    styles: ['h2 { background-color: azure; border-color: "blue" } ']
})

export class StatusBarComponent {
    @Input()
    message :string = "status";
    status: number = 0;

    constructor(){

    }


}