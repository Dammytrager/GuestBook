import { Component, OnInit } from '@angular/core';
import { faHistory, faCog, faList } from '../../../../node_modules/@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'gb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  faHistory=faHistory
  faCog=faCog
  faList=faList

  constructor() { }

  ngOnInit() {
  }

}
