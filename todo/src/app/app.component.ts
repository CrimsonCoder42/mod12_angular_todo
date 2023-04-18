import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //myVariable:string = "How are you doing today?";
  title = 'todo';
  todo:string="";
  clickMe(){
    console.log(this.todo);
  }
}
