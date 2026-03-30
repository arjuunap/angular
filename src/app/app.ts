import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './test/test';
import { FormsModule } from '@angular/forms' ;
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [Test,FormsModule,CommonModule],
  // RouterOutlet
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products : string[] =["Apple","Banana","orange"]
  selectedIndex : number | null = null
  deleteItem(index:number){
    this.products.splice(index,1)
  }

  selectItem(index:number){
    this.selectedIndex = index
  }
  protected readonly title = signal('my-app');
}
