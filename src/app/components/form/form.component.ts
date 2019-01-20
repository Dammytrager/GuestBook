import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { patternMatch } from 'src/app/Functions/myfunction';

const regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const num=/^0\d{10}$/

@Component({
  selector: 'gb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  get lastname(){
    return this.gbForm.get('lastname')
  }
  get firstname(){
    return this.gbForm.get('firstname')
  }
  get email(){
    return this.gbForm.get('email')
  }
  get location(){
    return this.gbForm.get('location')
  }
  get mobile_no(){
    return this.gbForm.get('mobile_no')
  }

  feedbackMessage='feedbackMessage'
  feedback:boolean=false
  isSubmit:boolean=false

  gbForm=this.fb.group({
    lastname:['',[Validators.required]],
    firstname:['',Validators.required],
    email:['',[Validators.required,patternMatch(regex)]],
    location:['',Validators.required],
    mobile_no:['',[Validators.required,patternMatch(num)]]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  closeFeedback(){
    this.feedback=false;
  }

  onSubmit(){
    this.isSubmit=true
  }
}
