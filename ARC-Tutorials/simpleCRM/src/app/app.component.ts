import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';
  show_success = false ;
  show_success_or = true ;
  contacts =[
    {
      "firstName" : "Abhinav",
      "lastName"  : "Kesari",
      "id"        : 123
    },
    {
      "firstName" : "Ankur",
      "lastName"  : "Kesari",
      "id"        : 345
    },
    {
      "firstName" : "Shiva",
      "lastName"  : "Shiva",
      "id"        : 786
    }
  ]

  superPower = 'D';//string


  styleVar = 'red';
  styleVar2 = 'blue';

  styleClsProp = 'c2 c3 c1';

  conditionClsProp = 'c4';

  getClass(){
    return 'c1';
  }

  userObject = {
      "firstName" : "Abhinav",
      "lastName" : "Kesari" 
    
    };

    colVal =2;

    sayHello(){
      console.log("hey its click event from Angular 10");
    }

    mouseHover(a: any,b: any,c: any){
      console.log("Mouse is hovering on it!!"+a+b+c);
    }

    inputBox(){
      console.log("focusing !!");
    }

}
