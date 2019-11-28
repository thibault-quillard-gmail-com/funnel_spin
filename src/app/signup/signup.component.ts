import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl, FormGroupName} from '@angular/forms';
import { Router,Params,ActivatedRoute} from  '@angular/router';
import { MustMatch } from './must-match.validator';
import { ToastrService } from 'ngx-toastr';
                            
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    error:any;
	SignupForm : FormGroup;
    responses:any;
	submitted = false;
	constructor(
	 private _auth: AuthGuard,
	 private formBuilder:FormBuilder,
	 private router: Router,
     private routes: ActivatedRoute,
	 private toastr: ToastrService	 ) { }
   

  ngOnInit() {	  
	this.SignupForm = this.formBuilder.group({ 
		email: ['',Validators.required],
		password: ['', [Validators.required, Validators.minLength(6)]],
		cpassword: ['', Validators.required]
		}, {
            validator: MustMatch('password', 'cpassword')
        });
	}
	
   get f() { return this.SignupForm.controls; }
 
    onSubmit(){
	this.submitted = true;
	if (this.SignupForm.invalid) {
		return;
	}
	else{
		this._auth.Signup(this.SignupForm.value)
		.subscribe (data => {
			this.responses = JSON.parse(data);
			this.error=this.responses.message;
			 if(this.error=="email already exist"){
				 this.toastr.error('Email already register!');
			} else{		
				this.toastr.success('Registered Successfull!');
				setTimeout(()=>{
					this.SignupForm.reset();
					this.router.navigate(['/login']);
				},2000)
		   }
		});
    }
}
}