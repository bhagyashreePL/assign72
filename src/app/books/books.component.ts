import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books= [' AngularJS','Css', 'C', 'Java', 'PHP'];
  technologies= [' Angular','Node JS', 'Android', 'Big data', 'Artificial Intelligence'];
  constructor() { }

  ngOnInit() {
  }

}
