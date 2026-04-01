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
 
}
