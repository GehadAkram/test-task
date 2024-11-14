import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  iterations = Array(5);

  station = {
    name: "Staion A",
    sales: 62721,
    value: 550,
    trasaction: 5161,
    compression: "Compression",
    max_hour: 20,
    max_date: "08-01-2021 | 10:16PM", 
  };
}
