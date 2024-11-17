import { Component } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.scss'
})
export class GraphsComponent {
  public salesChart = {
    type: 'ColumnChart' as ChartType,
    columns: ['Sales', 'Station'],
    data: [
      ['Station A', 250],
      ['Station B', 140],
      ['Station C', 200],
      ['Station D', 230],
      ['Station E', 140],
    ],
    options: {
      colors: ['#FF7F5C'],
      hAxis: { title: 'Stations'},
      vAxis: { title: 'Sales (EGP)' },
      legend: 'none',
    },
  };

  public valueChart = {
    type: 'ColumnChart' as ChartType,
    columns: ['Value', 'Station'],
    data: [
      ['Station A', 1500],
      ['Station B', 650],
      ['Station C', 880],
      ['Station D', 1350],
      ['Station E', 900],
    ],
    options: {
      colors: ['#FF7F5C'],
      hAxis: { title: 'Stations'},
      vAxis: { title: 'Value (EGP)' },
      legend: 'none',
    },
  };

  public transChart = {
    type: 'ColumnChart' as ChartType,
    columns: ['Transactions', 'Station'],
    data: [
      ['Station A', 12000],
      ['Station B', 6300],
      ['Station C', 15000],
      ['Station D', 8620],
      ['Station E', 1846],
    ],
    options: {
      colors: ['#FF7F5C'],
      hAxis: { title: 'Stations'},
      vAxis: { title: 'Transaction Count' },
      legend: 'none',
    },
  };

  public commChart = {
    type: 'ColumnChart' as ChartType,
    columns: ['Compression', 'Station'],
    data: [
      ['Station A', 2500],
      ['Station B', 1540],
      ['Station C', 600],
      ['Station D', 1230],
      ['Station E', 1740],
    ],
    options: {
      colors: ['#FF7F5C'],
      hAxis: { title: 'Stations'},
      vAxis: { title: 'Compression (m3)' },
      legend: 'none',
    },
  };
}