import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.scss']
})
export class RxjsLearningComponent implements OnInit {

  agents!: Observable<string>;
  agentName!: string;

  studentArray = ['Ram','Mark','Sita'];
  student$ : Observable<string[]> = of(this.studentArray);
  studentString$ : Observable<string> = of('Abhinav');

  studentObj = {id : 1,name : "Obke"}
  studentObjs$ : Observable<object> = of(this.studentObj);

  studentFromList = ['Eya','Siya','Jax','Rocky'];
  studentFrom$ : Observable<string> = from(this.studentFromList);

  @ViewChild('validate')
  validate1! : ElementRef;

  @ViewChild('getlink')
  getlink1! : ElementRef;

  constructor() { }

  ngOnInit(): void {
     
    /*   Ep -3 Observable 
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
    }) */

    /* // Ep -5 Of Operator
    this.student$.subscribe(data=>{
      console.log(data);
    })
    this.studentString$.subscribe(data=>{
      console.log(data);
    })
    this.studentObjs$.subscribe(data=>{
      console.log(data);
    }) */
     
  /*   // Ep -6 From Operator
    this.studentFrom$.subscribe(data=>{
      console.log(data);
    })
 */

    

   /*    this.studentFrom$.subscribe(data=>{
        console.log(data);
      }) */
  

  }
 // Ep -8 FromEvent Operator
     btnForFromEvent(){
       const btnForFromEvents$ = fromEvent(this.validate1.nativeElement,'click'); 
       btnForFromEvents$.subscribe(data=>{
        console.log(data);
       }) 
     }
     onMouseOver(){
      const onMouserOver1$ = fromEvent(this.getlink1.nativeElement,'mouseover'); 
      onMouserOver1$.subscribe(data=>{
        console.log(data);
      })
       

     } 

}


