import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl, FormGroupName} from '@angular/forms';
import { Router,Params,ActivatedRoute} from  '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    responses:any;       
	loginForm : FormGroup; 
	errormessage:any;
	error:boolean;
	constructor(
		private _auth: AuthGuard,
		private formBuilder:FormBuilder,
		private router: Router,
		private routes: ActivatedRoute,
		private toastr: ToastrService
	) { }

	ngOnInit() {
		
	this.loginForm = this.formBuilder.group({ 	
		email: [null,Validators.required],
		password: [null,Validators.required],
	});  
	 }
	
	onSubmit(){
	    this._auth.loginUser(this.loginForm.value)
		.subscribe(data => {	
			this.responses = JSON.parse(data);
			if(this.responses.errorType == 'success' && this.responses.status == true){
				this.toastr.success('Login Successfull!');
				setTimeout(()=>{
					localStorage.setItem('loginuseremail', this.responses.data[0].email);
				    this.router.navigate(['manage-wheels']);
				},3000)
			}		 
			else{
				this.error = true;
				this.errormessage=this.responses.message;
			}
		});
	}
}