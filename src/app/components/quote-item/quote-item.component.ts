import { Component, Input, OnInit } from '@angular/core';
import { QuoteInterface } from 'src/app/QuoteInterface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  @Input() quote!: QuoteInterface;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
