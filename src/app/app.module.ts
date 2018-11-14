import {LayoutModule} from '@angular/cdk/layout';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppMatlibModule} from './app.matlib.module';
import {AppComponent} from './component/app.component';
import {CardContainerComponent} from './component/common/card-container/card-container.component';
import {CardComponent} from './component/common/card/card.component';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {NavigatorComponent} from './component/navigator/navigator.component';
import {RegisterComponent} from './component/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    CardComponent,
    CardContainerComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMatlibModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
