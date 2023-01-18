import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      'username' : new FormControl('',[
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(2)
      ]),
      'email' : new FormControl('',[
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(5)
      ]),
      'phone' : new FormControl('',[
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(10)
      ])
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
