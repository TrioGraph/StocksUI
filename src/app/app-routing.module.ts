import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetricsComponent } from './admin/metrics/metrics.component';
import { AuthGuard } from './guards/auth.guard';
import { OrderDataComponent } from './pages/order-data/order-data.component';
import { OrderResponseComponent } from './pages/order-response/order-response.component';
import { OrderBookDataComponent } from './pages/order-book-data/order-book-data.component';
import { GetOrderBookResponseComponent } from './pages/get-order-book-response/get-order-book-response.component';
import { TradeBookDataComponent } from './pages/trade-book-data/trade-book-data.component';
import { GetTradeBookResponseComponent } from './pages/get-trade-book-response/get-trade-book-response.component';
import { HoldingDataComponent } from './pages/holding-data/holding-data.component';
import { GetHoldingResponseComponent } from './pages/get-holding-response/get-holding-response.component';
import { PositionDataComponent } from './pages/position-data/position-data.component';
import { GetPositionResponseComponent } from './pages/get-position-response/get-position-response.component';
import { ProfileDataComponent } from './pages/profile-data/profile-data.component';
import { GetProfileResponseComponent } from './pages/get-profile-response/get-profile-response.component';
import { RMSLimitDataComponent } from './pages/rms-limit-data/rms-limit-data.component';
import { GetRMSLimitResponseComponent } from './pages/get-rms-limit-response/get-rms-limit-response.component';
import { AngelTokenComponent } from './pages/angel-token/angel-token.component';
import { AngelTokenResponseComponent } from './pages/angel-token-response/angel-token-response.component';
import { LogOutResponseComponent } from './pages/logout-response/logout-response.component';
import { LastTradedPricesComponent } from './pages/last-traded-prices/last-traded-prices.component';
import { GetLTPDataResponseComponent } from './pages/get-ltp-data-response/get-ltp-data-response.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin/metrics', component: MetricsComponent, canActivate: [AuthGuard] },
  { path: 'pages/order-data', component: OrderDataComponent, canActivate: [AuthGuard] },
  { path: 'pages/order-response', component: OrderResponseComponent, canActivate: [AuthGuard] },
  { path: 'pages/order-book-data', component: OrderBookDataComponent, canActivate: [AuthGuard] },
  { path: 'pages/get-order-book-response', component: GetOrderBookResponseComponent, canActivate: [AuthGuard] },
  { path: 'pages/trade-book-data', component: TradeBookDataComponent, canActivate: [AuthGuard] },
  { path: 'pages/get-trade-book-response', component: GetTradeBookResponseComponent, canActivate: [AuthGuard] },
  { path: 'pages/holding-data', component: HoldingDataComponent, canActivate: [AuthGuard] },
  { path: 'pages/get-holding-response', component: GetHoldingResponseComponent, canActivate: [AuthGuard] },
  { path: 'pages/position-data', component: PositionDataComponent, canActivate: [AuthGuard] },
  { path: 'pages/get-position-response', component: GetPositionResponseComponent, canActivate: [AuthGuard] },
  { path: 'pages/profile-data', component: ProfileDataComponent, canActivate: [AuthGuard] },
  { path: 'pages/get-profile-response', component: GetProfileResponseComponent, canActivate: [AuthGuard] },
  { path: 'pages/rms-limit-data', component: RMSLimitDataComponent, canActivate: [AuthGuard] },
  { path: 'pages/get-rms-limit-response', component: GetRMSLimitResponseComponent, canActivate: [AuthGuard] },
  { path: 'pages/angel-token', component: AngelTokenComponent, canActivate: [AuthGuard] },
  { path: 'pages/angel-token-response', component: AngelTokenResponseComponent, canActivate: [AuthGuard] },
  { path: 'pages/logout-response', component: LogOutResponseComponent, canActivate: [AuthGuard] },
  { path: 'pages/last-traded-prices', component: LastTradedPricesComponent, canActivate: [AuthGuard] },
  { path: 'pages/get-ltp-data-response', component: GetLTPDataResponseComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
