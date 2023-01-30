import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
// @Input() value1:string;
  constructor(private _httpClient:HttpClient) { }
    postDetails(data:any){
    const headers= new HttpHeaders({'content-type':'application/x-www-form-urlencoded'})
    return this._httpClient.post("http://43.205.238.216:8080/StudentMgmt/addStudent",data,{headers})
  }
  getDetails(){
    return this._httpClient.get("http://43.205.238.216:8080/StudentMgmt/getStudentList")
  }
  EditDetails(data:any){
    const headers= new HttpHeaders({'content-type':'application/x-www-form-urlencoded'})
    return this._httpClient.post("http://43.205.238.216:8080/StudentMgmt/getStudentList", data,{headers})

  }
  updateDetails(data:any){
    const headers= new HttpHeaders({'content-type':'application/x-www-form-urlencoded'})
    return this._httpClient.post('http://43.205.238.216:8080/StudentMgmt/updateStudent',data,{headers})
  }
  deleteDetails(data:any){
    const headers= new HttpHeaders({'content-type':'application/x-www-form-urlencoded'})
    return this._httpClient.post("http://43.205.238.216:8080/StudentMgmt/deleteStudent",data,{headers})
  }
 login(){
  return true
 }

}
