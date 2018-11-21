import {LayoutModule} from '@angular/cdk/layout';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CardComponent} from './component/common/card/card.component';
import {JumbotronComponent} from './component/common/jumbotron/jumbotron.component';
import {LogoComponent} from './component/common/logo/logo.component';
import {ReactiveCardContainerComponent} from './component/common/reactive-card-container/reactive-card-container.component';
import {RichTextEditorComponent} from './component/common/rich-text-editor/rich-text-editor.component';
import {RichTextViewerComponent} from './component/common/rich-text-viewer/rich-text-viewer.component';
import {SeperatorComponent} from './component/common/seperator/seperator.component';
import {FooterComponent} from './component/footer/footer.component';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {NavigatorContainerComponent} from './component/navigator-container/navigator-container.component';
import {PrimaryTopNavigatorComponent} from './component/navigator-container/primary-top-navigator/primary-top-navigator.component';
import {SecondaryTopNavigatorComponent} from './component/navigator-container/secondary-top-navigator/secondary-top-navigator.component';
import {SideNavigatorComponent} from './component/navigator-container/side-navigator/side-navigator.component';
import {RegisterComponent} from './component/register/register.component';
import {RootComponent} from './component/root.component';
import {RoutingModule} from './routing.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  declarations: [
    RootComponent,
    NavigatorContainerComponent,
    PrimaryTopNavigatorComponent,
    SecondaryTopNavigatorComponent,
    SideNavigatorComponent,
    CardComponent,
    JumbotronComponent,
    RichTextEditorComponent,
    RichTextViewerComponent,
    ReactiveCardContainerComponent,
    SeperatorComponent,
    LoginComponent,
    LogoComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [RootComponent]
})
export class RootModule {
}
