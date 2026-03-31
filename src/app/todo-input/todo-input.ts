import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-input',
  standalone : true,
  imports: [FormsModule],
  templateUrl: './todo-input.html',
  styleUrl: './todo-input.css',
})
export class TodoInput {
  text : string = ''

  @Output() add = new EventEmitter<string>();

  addTodo(){
    if (this.text.trim()){
      this.add.emit(this.text);
      this.text = "";
    }
  }

}
