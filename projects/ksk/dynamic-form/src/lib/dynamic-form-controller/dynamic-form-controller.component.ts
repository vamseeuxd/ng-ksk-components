import {Component, HostBinding, Input} from '@angular/core';
import {FORM_CONTROLLER_TYPE} from '../interface/form-controller.enum';
import {COLUMN_SIZE_TYPE} from '../interface/column-size.type';
import {OFFSET_SIZE_TYPE} from '../interface/offset-size.type';

@Component({
  selector: 'ksk-dynamic-form-controller',
  templateUrl: './dynamic-form-controller.component.html',
  styleUrls: ['./dynamic-form-controller.component.scss']
})
export class DynamicFormControllerComponent {
  // tslint:disable-next-line:variable-name
  private _offsetSize: OFFSET_SIZE_TYPE[] = [];
  get offsetSize(): OFFSET_SIZE_TYPE[] {
    return this._offsetSize;
  }

  @Input()
  set offsetSize(value: OFFSET_SIZE_TYPE[]) {
    this._offsetSize = value;
    this.cssClassName = `${this._offsetSize && this._offsetSize.join(' ')} ${this._columnSize && this._columnSize.join(' ')}`;
  }

  // tslint:disable-next-line:variable-name
  private _columnSize: COLUMN_SIZE_TYPE[] = [];
  get columnSize(): COLUMN_SIZE_TYPE[] {
    return this._columnSize;
  }

  @Input()
  set columnSize(value: COLUMN_SIZE_TYPE[]) {
    this._columnSize = value;
    this.cssClassName = `${this._offsetSize && this._offsetSize.join(' ')} ${this._columnSize && this._columnSize.join(' ')}`;
  }

  @HostBinding('class') cssClassName = '';
  FORM_CONTROLLER_TYPE = FORM_CONTROLLER_TYPE;
  @Input() type: FORM_CONTROLLER_TYPE = FORM_CONTROLLER_TYPE.TEXT;
  @Input() label = '';
  @Input() name = '';
  @Input() help = '';
  @Input() pattern = null;
  @Input() placeholder = '';
  @Input() required = false;
  @Input() autoFocus = false;
  @Input() disabled = false;
  @Input() min: any = null;
  @Input() max: any = null;
  @Input() multiple = false;
  @Input() defaultValue: any;

}
