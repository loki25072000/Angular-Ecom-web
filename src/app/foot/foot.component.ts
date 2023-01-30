import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {
user:FormGroup;
  constructor(private formgroup:FormBuilder) { }

  ngOnInit() {
    this.user=this.formgroup.group({
      'user':['',Validators.required]
    })
  }


}
