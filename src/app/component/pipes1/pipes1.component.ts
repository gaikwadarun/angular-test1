import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes1',
  template: `<h1>{{name|json}}</h1> 
  <h2> {{123.89|number:'2.1-1'}} </h2>
  
  <h3>{{has1|json}}</h3>
  <h3>{{0.67|percent}}</h3>
  

  `

  ,
 
})
export class Pipes1Component {
public name= 'Arun Gaikwad';
public has1= {
  "firstname":"Ajith",
  "surname":"Nydu"
}
}
