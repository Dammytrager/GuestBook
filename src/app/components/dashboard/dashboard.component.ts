import { Component, OnInit } from '@angular/core';
import { faHistory, faCog, faList } from '../../../../node_modules/@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'gb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  faHistory=faHistory
  faCog=faCog
  faList=faList

  recent:boolean=true
  view:boolean=false
  setting:boolean=false

  constructor(private router:Router) { }

  ngOnInit() {
    this.checkPage()
  }

  setClass(value:number){
    if(value==1){
      this.recent=true
      this.view=false
      this.setting=false
    }
    else if(value==2){
      this.recent=false
      this.view=true
      this.setting=false
    }
    else if(value==3){
      this.recent=false
      this.view=false
      this.setting=true
    }
  }

  checkPage(){
    let page=this.router.url
    page=page.substr(page.lastIndexOf('/')+1)
    if(page=='recent-activities'){
      this.setClass(1)
    }
    else if(page=='view-guests'){
      this.setClass(2)
    }
    else if(page=='settings'){
      this.setClass(3)
    }
    else if(page=='dashboard'){
      this.router.navigate(['/admin/dashboard/recent-activities'])
    }
  }
}
