import {LayoutModule} from '@angular/cdk/layout';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppMatlibModule} from './app.matlib.module';
import {NavigatorComponent} from './navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    AppMatlibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
