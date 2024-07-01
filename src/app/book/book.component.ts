import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  bookTitle: string = "";
  bookAuthor: string = "";
  books: Book[] = [];

  ngOnInit(): void {
      
  }

  addBook() {
    //if(this.bookTitle.trim().length && this.bookAuthor.trim.length)
    let newBook: Book = {
      id : Date.now(),
      title: this.bookTitle,
      author: this.bookAuthor
    }

    this.books.push(newBook)
  }

}
