import { Component } from '@angular/core';

@Component({
    selector: 'ng-style-directive',
    template: `
        <h2>ngStyle</h2>
        
        <button (click)="big=!big">Big {{big ? 'off' : 'on'}}</button>
        <button (click)="back=!back">Background {{back ? 'off' : 'on'}}</button>
        <button (click)="bord=!bord">Border {{bord ? 'off' : 'on'}}</button>
        
        <p #part1 class="box" [ngStyle]="myStyles">
            {{part1.style.cssText}} 
        </p>
        
        <h3>Style binding</h3>
        <button (click)="brighter=!brighter">Bright {{brighter ? 'off' : 'on'}}</button>
        
        <p #part2 class="box" [style.font-size.px]="brighter ? 26 : 14"
                              [style.background-color]="brighter ? 'Pink' : 'White'">
            {{part2.style.cssText}} 
        </p>`,
    styles: ['.box {max-width: 450px; padding: 5px; }']
})
export class NgStyleComponent {
    private big = false;
    private back = false;
    private bord = false;

    private get myStyles(): any {
        return {
            'font-size' : this.big ? '26px' : '14px',
            'color' : this.back ? 'Blue' : 'Black',
            'background-color' : this.back ? 'Pink' : 'White',
            'border' : this.bord ? '1px solid Red' : ''
        };
    }
}