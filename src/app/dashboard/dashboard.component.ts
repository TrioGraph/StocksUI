import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false
})
export class DashboardComponent {
  stocks = [
    { symbol: 'AAPL', price: 173.12, change: +1.2 },
    { symbol: 'MSFT', price: 342.50, change: -0.6 },
    { symbol: 'GOOGL', price: 139.80, change: +2.1 }
  ];
}
