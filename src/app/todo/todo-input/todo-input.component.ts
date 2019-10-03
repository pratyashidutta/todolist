import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor(private item: TodoService) { }
input1
i=0
  ngOnInit() {
  }

additems(){
  this.item.todolist.push(this.input1);
}
}

