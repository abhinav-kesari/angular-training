import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filter-users',
 // templateUrl: './filter-users.component.html',
  template : `<p>filter-users works!</p>

  <p> we r inside  thae filter-users  tab for input - > {{ channelName }} with {{ tax }} </p>
  
  <button (click)="updateUsers()" >Update the value in Parant Component</button>`, 
  styleUrls: ['./filter-users.component.scss']
})
export class FilterUsersComponent implements OnInit , OnDestroy{

  @Input()
  channelName : string | undefined;
  
  @Input()
  tax : Number | undefined ;

  @Output()
  updateUsersFromChild = new EventEmitter();


  constructor() { }

  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }

  ngOnInit(): void {
  }

  updateUsers(){
    const newUsers = { fname : 'Abhinav' , lname : 'Kesari'};
    this.updateUsersFromChild.emit(newUsers);
  }


}


