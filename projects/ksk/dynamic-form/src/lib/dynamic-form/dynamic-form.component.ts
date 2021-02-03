import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FORM_CONTROLLER_TYPE} from '../interface/form-controller.enum';
import {DynamicFormControllerInterface} from '../interface/dynamic-form-controller.interface';

@Component({
  selector: 'ksk-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styles: []
})
export class DynamicFormComponent {

  @Input() formClass = 'm-4';
  @Input() formControls: DynamicFormControllerInterface[] = [];
  @ViewChild('dynamicForm') dynamicForm: NgForm | undefined;
  @Output() change: EventEmitter<any> = new EventEmitter();

  defaultColumnClass = 'col-md-4 mb-2';

  get form(): NgForm | undefined {
    return this.dynamicForm;
  }

  get valid(): boolean | null {
    return this.dynamicForm ? this.dynamicForm.valid : false;
  }

  get value(): boolean {
    return this.dynamicForm ? this.dynamicForm.value : {};
  }

  getFormControls(): DynamicFormControllerInterface[] {
    if (this.formControls && this.formControls.length > 0) {
      return this.formControls.filter((d) => !d.hide);
    } else {
      return [];
    }
  }

}
