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
}
