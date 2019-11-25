import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl, FormGroupName} from '@angular/forms';
import { Router,Params,ActivatedRoute} from  '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
           
	loginForm : FormGroup;   
	responses:any;
	 constructor(
		private _auth: AuthGuard,
		private formBuilder:FormBuilder,
		private router: Router,
		private routes: ActivatedRoute
	    ) { }

	ngOnInit() {		
			this.loginForm = this.formBuilder.group({ 
			email:  ['',[Validators.required, Validators.maxLength(6)]],
			password: ['',[Validators.required, Validators.maxLength(30)]]
		});  
	}
	
	onSubmit(){
		console.log(this.loginForm.value);
	    this._auth.loginUser(this.loginForm.value)
		.subscribe(data => {		   
		   // console.log(data);
		   this.responses = JSON.parse(data);
		   console.log(this.responses.response);
		   if(data){
			 this.router.navigate(['manage-wheels']);
		   }		   
		   else{
			console.log("email and password is not match");
		   }
		});
	}
	
}


