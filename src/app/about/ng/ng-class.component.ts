import { Component } from '@angular/core';

@Component({
    selector: 'ng-class-directive',
    template: `
        <h2>ngClass</h2>
        
        <button (click)="myClasses='bright border'">Bright</button>
        <button (click)="myClasses='dull'">Dull</button>
        <button (click)="myClasses=''">Default</button>
        
        <p #part1 class="box big" [ngClass]="myClasses">
            Classes: {{part1.className}} 
        </p>
        
        <button (click)="big=!big">Big {{big ? 'off' : 'on'}}</button>
        <button (click)="back=!back">Background {{back ? 'off' : 'on'}}</button>
        <button (click)="bord=!bord">Border {{bord ? 'off' : 'on'}}</button>
        
        <p #part2 class="box" [ngClass]="{'big' : big, 'bright' : back, 'border' : bord}">
            Classes: {{part2.className}} 
        </p>
        
        <h3>Class binding</h3>
        <button (click)="brighter=!brighter">Bright {{brighter ? 'off' : 'on'}}</button>
        
        <p #part3 [class.box]="brighter" [class.bright]="brighter" [class.border]="brighter">
            Classes: {{part3.className}} 
        </p>`,
    styles: [`
        .box { max-width: 400px; padding: 5px; }
        .big { font-size: 26px; }
        .dull { background-color: LightGray; }
        .bright { color: Blue; background-color: Pink; }
        .border { border: 1px solid Red; }`
    ]
})
export class NgClassComponent {
    private myClasses = '';
}
