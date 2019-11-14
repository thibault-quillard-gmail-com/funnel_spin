import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	constructor(private _auth: AuthGuard) { }

	ngOnInit() {
		this.signIn();
	}
	
	signIn(){	
		this._auth.loginUser();
			// .subscribe(data =>{			
			// });
	}
	
}
