import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  todo = '';
  todoList: string[] = [];

  clickMe() {
    this.todoList.push(this.todo);
  }

  deleteItem(tododel: string) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (tododel === this.todoList[i]) {
        this.todoList.splice(i, 1);
      }
    }
  }
}
