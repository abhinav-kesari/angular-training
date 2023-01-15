import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder,private contactsService:ContactsService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm =  this.formBuilder.group({
      'username' : new FormControl(''),
      'email' : new FormControl(''),
      'phone' : new FormControl('')
    })
  }

  submitForm(){
   this.contactsService.addUser(this.addUserForm.value).subscribe(data=>{
    console.log(data);
    console.log("User Created");
    this._snackBar.open("New User Created!!");

   },err=>{
    console.error("Error in creating User!!");
    this._snackBar.open("Unable to create New User!!");

   })
  }

}
