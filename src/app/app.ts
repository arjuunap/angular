import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoInput } from './todo-input/todo-input';
import { TodoList } from './todo-list/todo-list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,TodoInput,TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  todos : string[] = [];

  addTodo(todo:string){
    if(todo.trim()){
      this.todos.push(todo);
    }
  }

  deleteTodo(index:number){
    this.todos.splice(index,1)
  }
  
}