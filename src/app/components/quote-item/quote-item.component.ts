import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { QuoteInterface } from 'src/app/QuoteInterface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  @Input() quote!: QuoteInterface;
  @Output() onDeleteQuote: EventEmitter<QuoteInterface> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<QuoteInterface> = new EventEmitter();

  quotes: QuoteInterface[] = [];
  faTimes = faTimes;
  color: string = "red";

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(quote: QuoteInterface){
    this.onDeleteQuote.emit(quote);
  }
  onToggle(quote: QuoteInterface){
    this.onToggleReminder.emit(quote);
  }

}
