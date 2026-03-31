import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  text  = '';
  todos : string[] =[];

  addTodo(){
    this.todos.push(this.text);
    this.text = '';
  }

  deleteTodo(index:number){
    this.todos.splice(index,1)
  }
  
  protected readonly title = signal('my-app');
}
