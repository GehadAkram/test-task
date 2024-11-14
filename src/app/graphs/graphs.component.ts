import { Component } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.scss'
})
export class GraphsComponent {
  public salesChart = {
    chartType: 'ColumnChart' as ChartType,
    dataTable: [
      ['Station', 'Sales'],
      ['Station A', 1500],
      ['Station B', 2300],
      ['Station C', 1800],
      ['Station D', 1200],
      ['Station E', 3000],
    ],
    options: {
      colors: ['#FF7F5C'],
      title: 'Sales Data for Stations',
      hAxis: { title: 'Stations' },
      vAxis: { title: 'Sales (EGP)' },
      legend: 'none',
    },
  };
}