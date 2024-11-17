import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  showTotalSales = true;
  showCompressionState = true;
  showMaxTransactions = true;
  showTotalValue = true;
  showTransactionsCount = true;
  showMaxTransactionsDateTime = true;

  iterations = Array(5);

  station = {
    name: "Station A",
    sales: 62721,
    value: 550,
    trasaction: 5161,
    compression: "Compression",
    max_hour: 20,
    max_date: "08-01-2021 | 10:16PM", 
  };
}
