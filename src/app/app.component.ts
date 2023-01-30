import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-practice';
  val:any;

  myfunction(event){
this.val=event;
  }

  favBooks = [
    {topic : 'Principles'},
    {topic : 'This is Story'}
  ];

  addBook(newTable:string){
    const bookObj = {topic : newTable};
    this.favBooks = this.favBooks.concat(bookObj);
    console.log('App in ParentComponent :',bookObj);
  }
}
