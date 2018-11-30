import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExecutorService} from '../../../service/executor.service';
import {CardDataPlaceHolder} from '../../../vo/card-data-place-holder';
import {CardUiModel} from '../../../vo/card-ui-model';

/**
 * Draw a card
 */
@Component({
  selector: 'nwen-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  uiModel: CardUiModel;
  @Input()
  dataPlaceHolder: CardDataPlaceHolder<any>;
  @Output()
  initialized: EventEmitter<CardUiModel>;
  @Input()
  showTitle: boolean;
  @Input()
  showSubTitle: boolean;
  @Input()
  showContent: boolean;
  @Input()
  showCoverImage: boolean;

  constructor(private _executorService: ExecutorService) {
    this.showTitle = true;
    this.showSubTitle = true;
    this.showContent = true;
    this.showCoverImage = true;
    this.uiModel = new CardUiModel();
    this.initialized = new EventEmitter();
  }

  ngOnInit(): void {
    this.uiModel = new CardUiModel();
    this._executorService.exec(this.dataPlaceHolder.url, this.dataPlaceHolder.request, executorResponse => {
      const responsePayload = executorResponse.payload;
      this.uiModel.title = responsePayload[this.dataPlaceHolder.fieldsMapping.title];
      this.uiModel.content = responsePayload[this.dataPlaceHolder.fieldsMapping.content];
      this.uiModel.subTitle = responsePayload[this.dataPlaceHolder.fieldsMapping.subTitle];
      this.uiModel.coverImageUrl = responsePayload[this.dataPlaceHolder.fieldsMapping.coverImageUrl];
      this.uiModel.initialized = true;
      this.initialized.emit(this.uiModel);
    });
  }
}
