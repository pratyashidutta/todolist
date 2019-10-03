import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todolist1
  constructor(private obj: TodoService) { }

  ngOnInit() {
    this.todolist1=this.obj.todolist;
  }

}
