import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  
  userId : any;
  userDetails: any;
  editUserForm : FormGroup = new FormGroup({});

  constructor(private activatedRoute:ActivatedRoute,
              private contactsService: ContactsService,
              private formBuilder:FormBuilder,
              private _snackBar:MatSnackBar,
              private route:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.userId = data['id'];
    })

    //Getting User Details
    if(this.userId !== ''){
      this.contactsService.viewUsers(this.userId).toPromise()
      .then(data=>{
        this.userDetails = data;
        
      //Build Edit Form
      this.editUserForm = this.formBuilder.group({
          'name' : new FormControl(this.userDetails.name),
          'email': new FormControl(this.userDetails.email)
      })
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }

  updateUser(){
    this.contactsService.updateUser(this.userId,this.editUserForm.value).subscribe(data=>{
      this._snackBar.open("User Updated!!");
      this.route.navigateByUrl('users');
    },err=>{
      this._snackBar.open("User Not Updated!!");
    })
  }

}
