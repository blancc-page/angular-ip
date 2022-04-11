import { Component, OnInit } from '@angular/core';
import { QUOTES } from "../../mock-quotes";
import { QuoteInterface } from 'src/app/QuoteInterface';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: QuoteInterface[] = QUOTES;

  
  constructor() { }

  ngOnInit(): void {
  }

  deleteQuote(quote: QuoteInterface){
  this.quotes = this.quotes.filter(q => q.id !== quote.id);
  }

  addQuote(quote: QuoteInterface){
    console.log(quote);
    this.quotes.unshift(quote);
  }
}
