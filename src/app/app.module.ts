import {LayoutModule} from '@angular/cdk/layout';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './component/app.component';
import {AppMatlibModule} from './app.matlib.module';
import {CardComponent} from './component/card/card.component';
import {NavigatorComponent} from './component/navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    CardComponent
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
