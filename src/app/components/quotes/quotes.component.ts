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

  addQuote(quote: QuoteInterface){
     console.log(quote);
  }
}
