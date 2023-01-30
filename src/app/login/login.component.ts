import { Component,  Input,  OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string;
  password:string;
  // image="../../assets/images/boat2.jpg"

 
  myFunction(){
  // const allImages =`../../assets/images/boat${this.timerImage}.jpg`
  // console.log(allImages)
  }

  // like="../../assets/images/heart-solid.svg"
  // unlike="../../assets/images/heart-solid.svg"
  
  
   boatUrls=[{
    boaturl:"../../assets/images/boat1.jpg",
 
   },
   {
    boaturl:"../../assets/images/boat2.jpg"
   },
   {
    boaturl:"../../assets/images/boat3.jpg"
   }
  ]

  constructor(private formgroup:FormBuilder,private rout:Router,private _data: DataService) { }
      loginGroup:FormGroup;
settimer:any;
  ngOnInit() {
   this.loginGroup = this.formgroup.group({
    'username':['',Validators.required],
    'password':['',Validators.required]
   })
   this.myFunction()
   this.settimer = setInterval(() => this.setTimer(0), 900);
     
  }
  timer = []
  timer_img = "../../assets/images/boat2.jpg"
  setTimer(value: any) {
    var values = value
    this.timer.push([values])
    this.timer_img = `assets/images/boat${this.timer.length}.jpg`
    if (this.timer.length >= 6) {
      this.timer_img = "assets/images/boat6.jpg"
      clearInterval(this.settimer)
    }
  }

 login(){
  const loginValues =this.loginGroup.value;
  console.log(loginValues)
  console.log(this.loginGroup)
  if(loginValues.username=='lokesh'&& loginValues.password=='123456'){
    this.rout.navigateByUrl('/register')}

 }
 myfunction(){
  let theDiv: HTMLElement = document.getElementById("1")
 theDiv.style.color = "lightblue";
 }


}
