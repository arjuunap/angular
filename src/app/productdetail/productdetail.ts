import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-productdetail',
  imports: [],
  templateUrl: './productdetail.html',
  styleUrl: './productdetail.css',
})
export class Productdetail {
  id : string | null = '';
  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    
  }
}
