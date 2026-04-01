import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  newTodo = '';
  todos$;
  constructor(private todoservice : Todo){
    this.todos$ = this.todoservice.todos$
  }
  addTodo(){
    this.todoservice.addTodo(this.newTodo);
    this.newTodo = '';
  }

  deleteTodo(i:number){
    this.todoservice.deleteTodo(i);
  }
  toggleTodo(i:number){
    this.todoservice.toggleTodo(i)
  }
}



