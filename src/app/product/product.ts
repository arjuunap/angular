import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [RouterLink,CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  products = [
    {id:1,name:'shoes'},
    {id:2,name:'shirt'},
    {id:3,name:'watch'}
  ];
}
