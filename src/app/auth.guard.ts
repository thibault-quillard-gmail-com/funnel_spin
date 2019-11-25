import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Http, RequestOptions, Response} from '@angular/http';
import { Configuration } from './app.configuration';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthGuard implements CanActivate {
	public authToken;
	public isAuthenticated = true; // Set this value dynamically
  
	constructor(private router: Router, private _configuration: Configuration, private http:Http) {}
	dataUrl = this._configuration.ServerWithApiUrl;
	headersforapi = this._configuration.headersfor;
	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (this.isAuthenticated) {
		  return true;
		}
		this.router.navigate(['/']);
		return false;
	} 
  
	loginUser(student){
		return this.http.post('http://localhost:3000/login',student)
		.map(response => response.text());
	}
		
	Signup(students){
	   return this.http.post('http://localhost:3000/signup',students);	    
	}
		
	}
  
