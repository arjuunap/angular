import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone : true,
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  orginalName  : string = 'Angular Developer';
  userName : string = this.orginalName
  updateName(){
    this.userName = 'Expert User'
  }
  backTo(){
    this.userName = this.orginalName
  }
}
