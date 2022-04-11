import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuoteInterface } from 'src/app/QuoteInterface';
import { QUOTES } from 'src/app/mock-quotes';
@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  @Output() onAddQuote = new EventEmitter<QuoteInterface>();
  text!: string;
  author!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert("Please add a Quote");
      return;
    }

    const newQuote = {
      text: this.text,
      author: this.author,
      
    }

    this.onAddQuote.emit(newQuote);

    this.text = "";
    this.author = "";

    QUOTES.push(newQuote);
  }

}
