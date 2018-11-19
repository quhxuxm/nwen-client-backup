import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'nwen-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  title = 'NWen';

  constructor(private translate: TranslateService, private titleService: Title, private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    translate.addLangs(['zh', 'en']);
    translate.setDefaultLang('en');
    const languageOfBrowser = translate.getBrowserLang();
    translate.use(languageOfBrowser);
    this.matIconRegistry.addSvgIcon('nwen-logo', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/logo.svg'));
  }

  ngOnInit(): void {
    this.translate.get('root.title').subscribe(value => this.titleService.setTitle(value));
  }
}
