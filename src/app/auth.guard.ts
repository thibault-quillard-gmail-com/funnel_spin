import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Http, RequestOptions, Response} from '@angular/http';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Configuration } from './app.configuration';
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
  
	loginUser(){
		// console.log(this.dataUrl);
		// return this.http.post(this.dataUrl+'api/getdata', this.headersforapi)
		// .map( response => response.text());
	}
  
}