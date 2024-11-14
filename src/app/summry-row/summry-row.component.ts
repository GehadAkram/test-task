import { Component } from '@angular/core';

@Component({
  selector: 'app-summry-row',
  templateUrl: './summry-row.component.html',
  styleUrl: './summry-row.component.scss'
})
export class SummryRowComponent {
  total_value = 71028;
  total_value_diffrence = 2;
  tv_diffrence_up = false;
  total_sales = 20000;
  total_sales_diffrence = 50;
  ts_diffrence_up = true;
  avg_sales = 20000;
  avg_sales_diffrence = 50;
  as_diffrence_up = false;
  total_transaction_count = 1567;
  total_transaction_diffrence = 20;
  tt_diffrence_up = true;
}
