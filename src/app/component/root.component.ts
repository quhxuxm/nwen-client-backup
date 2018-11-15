import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'nwen-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  title = 'NWen';

  constructor(private translate: TranslateService, private titleService: Title) {
    translate.addLangs(['zh', 'en']);
    translate.setDefaultLang('en');
    const languageOfBrowser = translate.getBrowserLang();
    translate.use(languageOfBrowser);
  }

  ngOnInit(): void {
    this.translate.get('root.title').subscribe(value => this.titleService.setTitle(value));
  }
}
