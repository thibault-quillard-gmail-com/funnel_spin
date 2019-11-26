import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl, FormGroupName} from '@angular/forms';
import { Router,Params,ActivatedRoute} from  '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    error:any;
	SignupForm : FormGroup; 
    responses:any;
	
	constructor(
	 private _auth: AuthGuard,
	 private formBuilder:FormBuilder,
	 private router: Router,
     private routes: ActivatedRoute
	           ) { }
   

  ngOnInit() {
  this. SignupForm = this.formBuilder.group({
		email: [null,Validators.required],
		password: [null,Validators.required],
		cpassword: [null,Validators.required]
	   });
      }
  
	onSubmit(){
	console.log(this.SignupForm.value);
	this._auth.Signup(this.SignupForm.value)
	.subscribe (data => {
		console.log(data);
		this.responses = JSON.parse(data);
		this.error=this.responses.message;
	     if(this.responses.status==true){
			 this.router.navigate(['login']);
			 }		   
		   else{
			console.log("not register successfully");
		   }		
	 });
	  
	}

}