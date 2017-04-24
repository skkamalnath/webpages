import { Component } from '@angular/core';

@Component({
    selector: 'ng-if-directive',
    template: `
        <h2>ngIf</h2>
        <button (click)="show=!show">{{show ? 'hide' : 'show'}}</button>
        
        <div *ngIf="show">
            <p>
                <label><input #big type="checkbox" name="size" (change)="0" checked>Big</label>
                <label><input #small type="checkbox" name="size" (change)="0">Small</label>
            </p>
        
            <h3 *ngIf="big.checked">Big heading</h3>
            <p *ngIf="small.checked">Small paragraph</p>
        </div>`
})
export class NgIfComponent {
    private show = false;
}