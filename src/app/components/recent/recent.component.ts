import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { faHistory } from '../../../../node_modules/@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'gb-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  faHistory=faHistory
  showLoader=true;

  private url:string='../../../assets/dummy/recent.json'
  recentActivities:any=[]

  constructor(private http:HttpService) { }

  ngOnInit() {
    this.getRecentActivity(this.url)
    this.setDate(1548270618410)
  }


  setDate(value):string{
    value=parseInt(value)
    let now=new Date(value)
    let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    let date=now.getDate()
    let month=months[now.getMonth()]
    let year=now.getFullYear()
    let hour=now.getHours()
    let minute=now.getMinutes()
    let period
    if(hour<12){
      hour=hour==0?12:hour
      period="AM"
    }
    else if(hour>=12){
      hour=hour==12?12:hour-12
      period="PM"
    }
    return month+' '+date+', '+year+" at "+hour+":"+minute+' '+period
  }

  getRecentActivity(url:string){
    this.http.get(url)
    .then((data)=>{
      console.log(data)
      this.recentActivities=data.data
      this.showLoader=false
    })
  }
}
