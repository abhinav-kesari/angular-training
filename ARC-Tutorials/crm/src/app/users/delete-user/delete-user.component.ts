import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  userId : any;
  constructor(private activatedRoute: ActivatedRoute,
              private contactsService :ContactsService
              ,private _snackBar: MatSnackBar,
              private route:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.userId = data['id'];
    })

    if(this.userId){
      this.contactsService.deleteUser(this.userId).subscribe(data=>{
        console.log(data);
        this._snackBar.open("User - "+this.userId+' Deleted Successfully!!');
        this.route.navigateByUrl('users');
      },err =>{
        console.error();
        this._snackBar.open("User - "+this.userId+' Not Deleted!!');
        
      })
    }
  }

}
