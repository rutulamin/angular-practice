import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: `
        <p>This is warning field.</p>
    `,
    styles: [
        `
            p{
                padding: 15px;
                background-color: mistyrose;
                border: 1px solid red;
            }
        `
    ]
})

export class WarningAlertComponent{

}