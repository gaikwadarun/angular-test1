import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template:`
  <h1> Hello Good morning {{name}}<h1>
  <h2> Hii {{name}}. </h2>
  <button (click)="onClick()">Submit </button>{{greeting}}
  `
  
})

export class InterpolationComponent {
public name="Arun";
public greeting="";
onClick(){
  
  this.greeting ='Welcome to jumanji';
}
}
