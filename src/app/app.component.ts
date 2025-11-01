import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  themes = ['light','dark','cosmic'];
  current = 'light';
  fonts = [
    { label: 'Poppins (Sans)', value: 'poppins' },
    { label: 'Inter (Sans)', value: 'inter' },
    { label: 'Roboto (Sans)', value: 'roboto' },
    { label: 'Source Sans 3 (Sans)', value: 'source' },
    { label: 'Nunito (Sans)', value: 'nunito' },
    { label: 'Serif (Merriweather)', value: 'serif' },
    { label: 'Mono (JetBrains Mono)', value: 'mono' }
  ];
  currentFont = 'sans';
  // settings modal visibility
  showSettings = false;
  isSidebarCollapsed = false;
  pages = [
    {title: 'Angel Token', path: '/pages/angel-token'},
    {title: 'Angel Token Response', path: '/pages/angel-token-response'},
    {title: 'Profile Data', path: '/pages/profile-data'},
    {title: 'Get Profile Response', path: '/pages/get-profile-response'},
    {title: 'Logout Response', path: '/pages/logout-response'},
    {title: 'RMS Limit Data', path: '/pages/rms-limit-data'},
    {title: 'Get RMS Limit Response', path: '/pages/get-rms-limit-response'},
    {title: 'Order Data', path: '/pages/order-data'},
    {title: 'Order Response', path: '/pages/order-response'},
    {title: 'Order Book Data', path: '/pages/order-book-data'},
    {title: 'Get Order Book Response', path: '/pages/get-order-book-response'},
    {title: 'Trade Book Data', path: '/pages/trade-book-data'},
    {title: 'Get Trade Book Response', path: '/pages/get-trade-book-response'},
    {title: 'Last Traded Prices', path: '/pages/last-traded-prices'},
    {title: 'Get LTP Data Response', path: '/pages/get-ltp-data-response'},
    {title: 'Holding Data', path: '/pages/holding-data'},
    {title: 'Get Holding Response', path: '/pages/get-holding-response'},
    {title: 'Position Data', path: '/pages/position-data'},
    {title: 'Get Position Response', path: '/pages/get-position-response'}
  ];

  constructor(public theme: ThemeService, public auth: AuthService, private router: Router, public loading: LoadingService){
    this.current = this.theme.getTheme();
    this.currentFont = this.theme.getFont();
    // apply stored font on startup
    this.theme.setFont(this.currentFont);
    // motion
    this.currentMotion = this.theme.getMotion();
    this.theme.setMotion(this.currentMotion);
  }

  toggleSidebar(){
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  setTheme(t: string){
    this.current = t;
    this.theme.setTheme(t);
  }

  setFont(f: string){
    this.currentFont = f;
    this.theme.setFont(f);
  }

  motions = [
    { label: 'Full', value: 'full' },
    { label: 'Reduced', value: 'reduced' },
    { label: 'Off', value: 'none' }
  ];
  currentMotion = 'full';

  setMotion(m: string){
    this.currentMotion = m;
    this.theme.setMotion(m);
  }

  // showSettings boolean toggles modal; modal handles apply/cancel now

  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
