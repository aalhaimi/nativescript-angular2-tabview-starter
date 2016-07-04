import { Component, OnInit } from '@angular/core';
import {Page1Component} from '../page1/page1.component';
import {Page2Component} from '../page2/page2.component';

@Component({
  selector: 'tabs',
  directives: [Page1Component, Page2Component],
  templateUrl:"./components/tabs/tabs.html",
})
export class TabsComponent implements OnInit {
  public tabIndex: number;

  constructor() {
    this.tabIndex = 0;
  }

  ngOnInit() {}



}
