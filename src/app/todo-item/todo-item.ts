import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  imports: [],
  standalone : true,
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input() todo : string = '';

  @Output() delete = new EventEmitter<void>();

  remove(){
    this.delete.emit()
  }
}
