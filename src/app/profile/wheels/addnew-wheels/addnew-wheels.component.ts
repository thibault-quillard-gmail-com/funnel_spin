import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-addnew-wheels',
  templateUrl: './addnew-wheels.component.html',
  styleUrls: ['./addnew-wheels.component.css']
})
export class AddnewWheelsComponent implements OnInit {

public barChartOptions: ChartOptions = {
	responsive: true,
	// We use these empty structures as placeholders for dynamic theming.
	scales: { xAxes: [{}], yAxes: [{}] },
	};
	public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	public barChartType: ChartType = 'bar';
	public barChartLegend = true;

	public barChartData: ChartDataSets[] = [
	{ data: [65, 59, 80, 81, 56, 55, 40], label: 'View' },
	{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Signup' }
	];

	constructor() { }

	ngOnInit() {
	}

	// events
	public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
	console.log(event, active);
	}

	public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
	console.log(event, active);
	}

	public randomize(): void {
	this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
	}
  
	copyInputMessage(inputElement){
		inputElement.select();
		document.execCommand('copy');
		inputElement.setSelectionRange(0, 0);
		alert('Code copied');
	}

}
