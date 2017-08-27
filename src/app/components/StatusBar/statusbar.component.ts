import { Component,Input } from '@angular/core';

@Component({
    selector: 'status-bar',
    template: `
    <div>
        <h2>{{message}}</h2>
    </div>
    `,
    styles: ['h2 { border-width: 9px; border-color: "blue" } ']
})

export class StatusBarComponent {
    @Input()
    status: number = 0;
    message :string = "status";

    constructor(){

    }


}