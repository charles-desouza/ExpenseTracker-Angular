import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyExpenseComponent } from './daily-expense/daily-expense.component';
import { DailyExpenseListComponent } from './daily-expense/daily-expense-list/daily-expense-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyExpenseComponent,
    DailyExpenseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
