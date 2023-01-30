import { style } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private el:ElementRef) { }

  ngOnInit() {

  }
  
  values=false;
  indexValues;
  // likeIcon:any="like"
  // this.indexValues=val
  likeFunction(val){
  // const iconValue=this.el.nativeElement.querySelectorAll('i');
  console.log(this.imageUrls)
  if(this.imageUrls[val].status==false){
    let icon:HTMLElement=document.getElementById(val)
    icon.style.color='red'
    return this.imageUrls[val].status=true
   
  }
else{
  let icon:HTMLElement=document.getElementById(val)
  icon.style.color='black'
  return this.imageUrls[val].status=false
}

  }

  // img Url
  imageUrls=[
    {
      imgUrl:"../../assets/images/boat1.jpg",
      likeurl:"../../assets/images/heart-solid.svg",
      likedurl:"../../assets/images/heart.svg",
      status:false
    },
    {
      imgUrl:"../../assets/images/boat2.jpg",
      likeurl:"../../assets/images/heart-solid.svg",
      status:false
    },
    {
      imgUrl:"../../assets/images/boat3.jpg",
      likeurl:"../../assets/images/heart-solid.svg",
      status:false
    },
    {
      imgUrl:"../../assets/images/boat4.jpg",
      likeurl:"../../assets/images/heart-solid.svg",
      status:false
    },
    {
      imgUrl:"../../assets/images/boat5.jpg",
      likeurl:"../../assets/images/heart-solid.svg",
      status:false
    },
    {
      imgUrl:"../../assets/images/boat6.jpg",
      likeurl:"../../assets/images/heart-solid.svg",
      status:false
    },
    {
      imgUrl:"../../assets/images/boat7.jpg",
      likeurl:"../../assets/images/heart-solid.svg",
      status:false
    },
    {
      imgUrl:"../../assets/images/boat8.jpg",
      likeurl:"../../assets/images/heart-solid.svg",
      status:false
    },
  ]
}
