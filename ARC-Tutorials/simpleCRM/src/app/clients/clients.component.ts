import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientList = [
    {clientId : 10 , firstname : 'Abhinav' , lastname : 'Kesari'},
    {clientId : 11 , firstname : 'tony' , lastname : 'Stark'},
    {clientId : 12 , firstname : 'Allen ' , lastname : 'Walker'},
    {clientId : 13 , firstname : 'Anshul' , lastname : 'K'},
    {clientId : 14 , firstname : 'Ankur' , lastname : 'K'},
    {clientId : 15 , firstname : 'Berry' , lastname : 'Allen'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
