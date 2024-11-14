import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  monitored_station = 2;
  all_stations = 3;
  latest_update =20;

  day?: string;
  view?: string;

  stations = [
    { name: 'Station A', sales: 63721 },
    { name: 'Station B', sales: 63721 },
    { name: 'Station C', sales: 0 }
  ];
}
