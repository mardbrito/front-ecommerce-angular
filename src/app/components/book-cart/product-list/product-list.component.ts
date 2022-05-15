import { Component, OnInit } from '@angular/core';
import { Book } from './model/books.model';
import { BooksService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: Array<Book> = [];
  booksService: BooksService;

  constructor(booksService: BooksService) {
    this.booksService = booksService;
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.booksService.getAllBooks().subscribe(response => {
      this.books = response;
    })
  }

  

}