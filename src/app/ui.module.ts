import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {CardComponent} from './component/common/card/card.component';
import {JumbotronComponent} from './component/common/jumbotron/jumbotron.component';
import {ReactiveContainerComponent} from './component/common/reactive-container/reactive-container.component';
import {RichTextEditorComponent} from './component/common/rich-text-editor/rich-text-editor.component';
import {RichTextViewerComponent} from './component/common/rich-text-viewer/rich-text-viewer.component';
import {SeperatorComponent} from './component/common/seperator/seperator.component';
import {FooterComponent} from './component/footer/footer.component';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {NavigatorComponent} from './component/navigator/navigator.component';
import {RegisterComponent} from './component/register/register.component';

@NgModule({
  declarations: [
    NavigatorComponent,
    CardComponent,
    JumbotronComponent,
    RichTextEditorComponent,
    RichTextViewerComponent,
    ReactiveContainerComponent,
    SeperatorComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NavigatorComponent,
    CardComponent,
    JumbotronComponent,
    RichTextEditorComponent,
    RichTextViewerComponent,
    ReactiveContainerComponent,
    SeperatorComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent
  ]
})
export class UiModule {
}
