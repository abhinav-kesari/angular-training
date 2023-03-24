import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, take, takeWhile } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm! : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name : new FormControl('Rxjs')
    });

    this.searchForm.get('name')?.valueChanges
    .pipe(
      takeWhile((v)=>this.checkCondition(v)),
      //take(3),
      debounceTime(2000)
    )
    .subscribe(data=>{
      console.log(data);
    })
    
  }
  checkCondition(val: string){
    return val.length > 6 ? false : true;
  }
  readSearch(){
  }
}
