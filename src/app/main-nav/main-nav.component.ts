import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import * as $ from 'jquery';
declare function sidebarCollapse(): any;
declare function sidebarInit(): any;

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit{

  ngOnInit(): void {
	console.log('MainNavComponent ngOnInit');
	  sidebarInit()
   }

}
