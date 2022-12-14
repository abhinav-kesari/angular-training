import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { param } from 'cypress/types/jquery';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  id = 0;
  color= '';
  size = '';
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((param)=>{
      console.log(param);
      this.id= param['id'];
      this.color= param['color'];
      this.size= param['size'];
    })
   }

  ngOnInit(): void {
  }

}
