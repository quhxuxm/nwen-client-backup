import {LayoutModule} from '@angular/cdk/layout';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppMatlibModule} from './app.matlib.module';
import {AppComponent} from './component/app.component';
import {CardComponent} from './component/common/card/card.component';
import {JumbotronComponent} from './component/common/jumbotron/jumbotron.component';
import {ReactiveContainerComponent} from './component/common/reactive-container/reactive-container.component';
import {RichTextEditorComponent} from './component/common/rich-text-editor/rich-text-editor.component';
import {RichTextViewerComponent} from './component/common/rich-text-viewer/rich-text-viewer.component';
import {SeperatorComponent} from './component/common/seperator/seperator.component';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {NavigatorComponent} from './component/navigator/navigator.component';
import {RegisterComponent} from './component/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    CardComponent,
    JumbotronComponent,
    RichTextEditorComponent,
    RichTextViewerComponent,
    ReactiveContainerComponent,
    SeperatorComponent,
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
