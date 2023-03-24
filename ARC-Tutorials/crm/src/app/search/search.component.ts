import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, elementAt, first, from, last, take, takeLast, takeWhile } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm! : FormGroup;
  sports : string[] = ['cricket' , 'badminton','chess','tabletenis'];
  sportsList$ = from(this.sports);

  constructor() { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name : new FormControl('Rxjs')
    });

    this.searchForm.get('name')?.valueChanges
    .pipe(
      
     // takeWhile((v)=>this.checkCondition(v)),
      //take(3),
      debounceTime(2000)
    )
    .subscribe(data=>{

     this.sportsList$.pipe(
     // takeLast(2),
     // last(),
     // first(),
        elementAt(1)
     ).subscribe(data2=>{
       console.log(data  +" - " + data2);
     })

    })
    
  }
  checkCondition(val: string){
    return val.length > 6 ? false : true;
  }
  readSearch(){
  }
}
