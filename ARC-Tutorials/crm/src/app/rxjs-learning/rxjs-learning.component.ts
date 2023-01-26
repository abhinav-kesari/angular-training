import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.scss']
})
export class RxjsLearningComponent implements OnInit {

  agents!: Observable<string>;
  agentName!: string;

  constructor() { }

  ngOnInit(): void {
    this.agents = new Observable(
          function (observer) {
            try {
              setInterval(()=>{
                observer.next('Ram');
              },1000);
                setInterval(()=>{
                  observer.next('Mark');
                },2000);
                setInterval(()=>{
                  observer.next('Sita');
                },3000);
              
            } catch (error) {
                  observer.error(error);
            } 
          }
    );

    this.agents.subscribe(data=>{
      console.log(data);
       this.agentName = data;
    })
  }

}
