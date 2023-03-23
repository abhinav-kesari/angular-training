import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  ngOnInit(): void {
   console.log()
  }

  title = 'basic-of-angular';
  userLoggedIn: boolean | undefined;
  myObservable  = of (1, 2, 3);
  obs= new Observable((observer) => {
  console.log("Observable starts");  
  setTimeout(()=> { observer.next("2") }, 2000);
  setTimeout(()=> { observer.next("2") }, 2000);
  setTimeout(() => { observer.next("3") }, 3000);
  setTimeout(() => { observer.next("4") }, 4000);
  setTimeout(() => { observer.next("5") }, 5000);
  console.log("Observable ends");
});
}
