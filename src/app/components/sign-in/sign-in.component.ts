import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'gb-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  faUser=faUser

  get username(){
    return this.signinForm.get('username')
  }
  get password(){
    return this.signinForm.get('password')
  }

  isSubmit:boolean=false
  feedback:boolean=false
  feedbackMessage='feedbackMessage'

  signinForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    this.isSubmit=true
  }

  closeFeedback(){
    this.feedback=false
  }

}
