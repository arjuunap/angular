import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface Todos{
  title : string,
  completed : boolean
}
@Injectable({
  providedIn: 'root',
})
export class Todo {
  private todosSubject = new BehaviorSubject<Todos[]>([]);
  todos$ = this.todosSubject.asObservable();

  addTodo(title: string){
    const current = this.todosSubject.value;

    const newTodo : Todos = {
      title,
      completed : false
    }
    this.todosSubject.next([...current,newTodo])
  }

  deleteTodo(index:number){
    const updated = this.todosSubject.value.filter((_,i) => i !==index);
    this.todosSubject.next(updated)
  }

  toggleTodo(index : number){
    const updated = this.todosSubject.value.map((todo,i)=>{
      if (i === index){
        return {...todo,completed: !todo.completed};
      }
      return todo
    });
    this.todosSubject.next(updated)
  }
}
