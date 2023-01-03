import { Interpolation } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: ` <body>
  <h1>Color Choices shown below</h1>
  <input class="red" type="text">

  <div [ngSwitch]="color">
  <div *ngSwitchCase="'Red'">You Picked Red</div>
  <div *ngSwitchCase="'Yellow'">You Picked Yellow</div>
  <div *ngSwitchCase="'blue'">You Picked Blue</div>
  <div *ngSwitchCase="'Black'">You Picked Black</div>
  <div *ngSwitchDefault>Please Select any color</div>
  </div>
  </body>
  `,
  styleUrls:['./interpolation.component.css']
  })

export class InterpolationComponent {

  public color="Black";

}
