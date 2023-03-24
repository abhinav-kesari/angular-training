import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

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
      debounceTime(2000)
    )
    .subscribe(data=>{
      console.log(data);
    })
  }

  readSearch(){

  }
}
