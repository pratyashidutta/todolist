import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todolist1
todolist2
  constructor(private obj: TodoService) { }

  ngOnInit() {
    this.todolist1=this.obj.todolist;
    this.todolist2=this.obj.donelist;
  }

  delete(i){
    this.obj.todolist.splice(i,1);
  }

  delete2(i){
    this.obj.donelist.splice(i,1);
  }

  checked(i){
    var arr=this.obj.todolist.splice(i,1)
    this.obj.donelist.push(arr[0])

  }
checked2(i){
  var arr=this.obj.donelist.splice(i,1)
  this.obj.todolist.push(arr[0])

  }
}
