import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gb-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  signIn:boolean=false

  constructor(private router:Router) {
    this.setState()
   }

  ngOnInit() {
  }

  setState(){
    if(this.signIn){
      this.router.navigate(['/admin/sign-in'])
    }
  }

}
