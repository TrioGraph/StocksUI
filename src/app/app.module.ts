import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
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
import { GetLTPDataResponseComponent } from './pages/get-ltp-data-response/get-ltp-data-response.component';
import { AngelTokenComponent } from './pages/angel-token/angel-token.component';
import { AngelTokenResponseComponent } from './pages/angel-token-response/angel-token-response.component';
import { RMSLimitDataComponent } from './pages/rms-limit-data/rms-limit-data.component';
import { GetRMSLimitResponseComponent } from './pages/get-rms-limit-response/get-rms-limit-response.component';
import { LogOutResponseComponent } from './pages/logout-response/logout-response.component';
import { LastTradedPricesComponent } from './pages/last-traded-prices/last-traded-prices.component';
import { FormViewerComponent } from './shared/form-viewer/form-viewer.component';
import { SettingsModalComponent } from './settings/settings-modal.component';
import { MetricsComponent } from './admin/metrics/metrics.component';
import { ToastHostComponent } from './shared/toast-host/toast-host.component';
import { HeadersInterceptor } from './interceptors/headers.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CachingInterceptor } from './interceptors/caching.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { RetryInterceptor } from './interceptors/retry.interceptor';
import { ProfilingInterceptor } from './interceptors/profiling.interceptor';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
    ,OrderDataComponent
    ,OrderResponseComponent
    ,OrderBookDataComponent
    ,GetOrderBookResponseComponent
    ,TradeBookDataComponent
    ,GetTradeBookResponseComponent
    ,HoldingDataComponent
    ,GetHoldingResponseComponent
    ,PositionDataComponent
    ,GetPositionResponseComponent
  ,ProfileDataComponent
  ,GetProfileResponseComponent
    ,GetLTPDataResponseComponent
  ,RMSLimitDataComponent
  ,GetRMSLimitResponseComponent
  ,AngelTokenComponent
  ,AngelTokenResponseComponent
  ,LogOutResponseComponent
  ,LastTradedPricesComponent
  ,FormViewerComponent
  ,SettingsModalComponent
  ,SettingsModalComponent
  ,MetricsComponent
  ,ToastHostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ProfilingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
