import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule,TodoItem],
  standalone : true,
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  @Input() todos : string[] = [];

  @Output() delete  = new EventEmitter<number>();

  remove(index:number){
    this.delete.emit(index);
  }
}
