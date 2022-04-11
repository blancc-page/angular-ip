import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuoteItemComponent } from './components/quote-item/quote-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddQuoteComponent } from './components/add-quote/add-quote.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuotesComponent,
    QuoteItemComponent,
    AddQuoteComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
