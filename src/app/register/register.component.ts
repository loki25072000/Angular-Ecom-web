import { NgIf } from '@angular/common';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';






@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mailval = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+")){2,}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  mobileno = /^[0-9\-+()\d\s]+$/
  constructor(private formgroup: FormBuilder, private _data: DataService) { }
  details_form: FormGroup;
  // saveBtn:boolean;
  ngOnInit() {
    this.details_form = this.formgroup.group({
      '_id': [''],
      'name': [null, Validators.required],
      'department': [null, Validators.required],
      'section': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.pattern(this.mailval)])],
      'phoneno': [null, Validators.compose([Validators.required, Validators.pattern(this.mobileno)])],
      'gender': [null, Validators.required],
      'address': [null, Validators.required],
      'age': [null, Validators.required]
    })
    this.ongetting();
    // this.saveValue();
  }
  numbervalidation(event) {
    const pattern = /[0-9]/;
    let inputchar = String.fromCharCode(event.charCode)
    if (!pattern.test(inputchar)) {
      event.preventDefault();
    }
  }
  namevalidation(event: any) {
    const pattern = /^[A-Za-z-.-]+$/;
    let inputchar = String.fromCharCode(event.charCode)
    if (!pattern.test(inputchar)) {
      event.preventDefault();
    }
  }

  submit() {
    
    this.onpost();
    this.ongetting();
    // this.onupdate()
    this.details_form.reset();

  }


  onpost() {
    const obj = this.details_form.value;
    const params = "studentdetails=" + JSON.stringify(obj)
    console.log(params)
    this._data.postDetails(params).subscribe(sub => {

    })
  }
  values: any;
  ongetting() {
    this._data.getDetails().subscribe(sub2 => {
      this.values = sub2;

    })
  }


  patchValue(data) {
    const id = "studentid=" + data._id;
    this._data.EditDetails(id).subscribe(datas => {
      this.details_form.patchValue(datas[0]);
    })
    // this.saveBtn=false;
  }
  saveValue() {
    const obj = this.details_form.value;
    const params = "studentdetails=" + JSON.stringify(obj)
    console.log(params)
    this._data.updateDetails(params).subscribe(sub => {
    })
    this.ongetting();
    this.details_form.reset()

  }
  delete(data) {
    const id = "studentid=" + data._id;
    this._data.deleteDetails(id).subscribe(datas => {

    })
    this.ongetting();
  }


}
