import { Component, OnInit } from '@angular/core';
import { WheelsService } from '../../services/wheels.service'; 
import { Router,Params,ActivatedRoute} from  '@angular/router';

@Component({
  selector: 'app-wheels',
  templateUrl: './wheels.component.html',
  styleUrls: ['./wheels.component.css']
})
export class WheelsComponent implements OnInit {
loginuser = localStorage.getItem('loginuseremail');
responses:any;
wheeldata:any;
	constructor( 
		private _wheelservice: WheelsService,
		private router: Router,
		private routes: ActivatedRoute) { }
	
	ngOnInit() {
		this.getAllwheels();
	}
	
	getAllwheels(){
		this._wheelservice.getWheeldata()
		.subscribe (data => {
			this.responses = JSON.parse(data);
			this.wheeldata = this.responses.response
			console.log(this.responses);
		 });
	}

}
