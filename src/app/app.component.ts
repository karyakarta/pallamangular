import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import * as $ from 'jquery';
declare function sidebarCollapse(): any;
declare function sidebarInit(): any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-starter';
  version = 'Angular version 11.0.3';
 
  onClickSubmit() {
	 //sidebarInit()
	}
	
	ngOnInit(): void {
	console.log('AppComponent ngOnInit');
	  sidebarInit()
   }
  
}
