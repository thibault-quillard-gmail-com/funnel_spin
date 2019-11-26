import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Http, RequestOptions, Response} from '@angular/http';
import { Configuration } from '../app.configuration';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class WheelsService {

	constructor(private router: Router, private _configuration: Configuration, private http:Http) { }
	dataUrl = this._configuration.ServerWithApiUrl;
	headersforapi = this._configuration.headersfor;
	
	getWheeldata(){
		return this.http.get(this.dataUrl+'getAllWheels')
		.map(response => response.text());
	}
}
