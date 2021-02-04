import {moduleMetadata} from '@storybook/angular';
import {Story, Meta} from '@storybook/angular/types-6-0';
import {DynamicFormModule} from './dynamic-form.module';
import {boolean, number, radios, text, array} from '@storybook/addon-knobs';
import {FORM_CONTROLLER_TYPE} from './interface/form-controller.enum';
import {DynamicFormControllerComponent} from './dynamic-form-controller/dynamic-form-controller.component';


export default {
  title: '@ksk/ksk-dynamic-form',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [DynamicFormModule],
    }),
  ],
} as Meta;


// @ts-ignore
export const EmailFormController = () => ({
  component: DynamicFormControllerComponent,
  props: {
    type: radios('type', FORM_CONTROLLER_TYPE, FORM_CONTROLLER_TYPE.EMAIL),
    label: text('label', 'Enter Email'),
    help: text('help', 'Errors appear instantly!'),
    defaultValue: text('defaultValue', ''),
    columnSize: array('columnSize', ['col-md-4']),
    offsetSize: array('offsetSize', ['offset-md-4']),
    name: text('name', ''),
    placeholder: text('placeholder', 'Enter Email'),
    disabled: boolean('disabled', false),
    min: number('min', 0),
    max: number('max', 50),
    required: boolean('required', true),
    autoFocus: boolean('required', true),
  },
  template: `
      <div class="row">
        <ksk-dynamic-form-controller
            [placeholder]="placeholder"
            [defaultValue]="defaultValue"
            [max]="max"
            [min]="min"
            [required]="required"
            [name]="name"
            [disabled]="disabled"
            [offsetSize]="offsetSize"
            [columnSize]="columnSize"
            [autoFocus]="autoFocus"
            [type]="type"
            [label]="label"
            [help]="help"
            >
        </ksk-dynamic-form-controller>
        <div class="col-12 pt-4">
        <div style="max-height: calc(100vh - 150px); overflow-y: auto;" class="form-row">
            <div class="form-group col-xs-6">
              <label>Label</label>
              <input type="text" [(ngModel)]="label" class="form-control">
            </div>
            <div class="form-group col-xs-6">
              <label>Name</label>
              <input type="text" [(ngModel)]="name" class="form-control">
            </div>
            <div class="form-group col-xs-6">
              <label>Min</label>
              <input type="number" [(ngModel)]="min" class="form-control">
            </div>
            <div class="form-group col-xs-6">
              <label>Max</label>
              <input type="number" [(ngModel)]="max" class="form-control">
            </div>
            <div class="form-group col-xs-6">
              <label>Help</label>
              <input type="text" [(ngModel)]="help" class="form-control">
            </div>
            <div class="form-group col-xs-6">
              <label>Placeholder</label>
              <input type="text" [(ngModel)]="placeholder" class="form-control">
            </div>
            <div class="form-group col-xs-6">
              <label>Default Value</label>
              <input type="text" [(ngModel)]="defaultValue" class="form-control">
            </div>
            <div class="form-group col-xs-6">
              <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    [(ngModel)]="required"
                    id="requiredCheck"
                    >
                <label class="form-check-label" for="requiredCheck">Required</label>
              </div>
            </div>
            <div class="form-group col-xs-6">
              <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    [(ngModel)]="disabled"
                    id="disabledCheck"
                    >
                <label class="form-check-label" for="disabledCheck">Disabled</label>
              </div>
            </div>
            <div class="form-group col-x-6">
              <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    [(ngModel)]="autoFocus"
                    id="autoFocusCheck"
                    >
                <label class="form-check-label" for="autoFocusCheck">AutoFocus</label>
              </div>
            </div>
        </div>
        </div>
      </div>
   `
});
export const ColorFormController = () => ({
  component: DynamicFormControllerComponent,
  props: {
    type: radios('type', FORM_CONTROLLER_TYPE, FORM_CONTROLLER_TYPE.COLOR),
    label: text('label', 'label'),
    columnSize: ['col-md-4'],
    offsetSize: ['offset-md-4'],
    name: text('name', ''),
    placeholder: text('placeholder', 'Place Holder'),
    disabled: boolean('disabled', false),
    min: number('min', 0),
    max: number('max', 0),
    required: boolean('required', true),
    autoFocus: boolean('required', true),
  },
  template: `
      <div class="row">
        <ksk-dynamic-form-controller
              [autoFocus]="autoFocus"
              [placeholder]="placeholder"
              [max]="max"
              [min]="min"
              [required]="required"
              [name]="name"
              [disabled]="disabled"
              [offsetSize]="offsetSize"
              [columnSize]="columnSize"
              [type]="type"
              [label]="label"
        >
        </ksk-dynamic-form-controller>
      </div>
   `
});
export const DateFormController = () => ({
  component: DynamicFormControllerComponent,
  props: {
    type: radios('type', FORM_CONTROLLER_TYPE, FORM_CONTROLLER_TYPE.DATE),
    label: text('label', 'label'),
    columnSize: ['col-md-4'],
    offsetSize: ['offset-md-4'],
    name: text('name', ''),
    placeholder: text('placeholder', 'Place Holder'),
    disabled: boolean('disabled', false),
    min: number('min', 0),
    max: number('max', 0),
    required: boolean('required', false),
  },
  template: `
      <div class="row">
        <ksk-dynamic-form-controller [placeholder]="placeholder" [max]="max" [min]="min" [required]="required" [name]="name" [disabled]="disabled" [offsetSize]="offsetSize" [columnSize]="columnSize" [type]="type" [label]="label"></ksk-dynamic-form-controller>
      </div>
   `
});
export const DatetimeFormController = () => ({
  component: DynamicFormControllerComponent,
  props: {
    type: radios('type', FORM_CONTROLLER_TYPE, FORM_CONTROLLER_TYPE.DATETIME),
    label: text('label', 'label'),
    columnSize: ['col-md-4'],
    offsetSize: ['offset-md-4'],
    name: text('name', ''),
    placeholder: text('placeholder', 'Place Holder'),
    disabled: boolean('disabled', false),
    min: number('min', 0),
    max: number('max', 0),
    required: boolean('required', false),
  },
  template: `
      <div class="row">
        <ksk-dynamic-form-controller [placeholder]="placeholder" [max]="max" [min]="min" [required]="required" [name]="name" [disabled]="disabled" [offsetSize]="offsetSize" [columnSize]="columnSize" [type]="type" [label]="label"></ksk-dynamic-form-controller>
      </div>
   `
});
export const MonthFormController = () => ({
  component: DynamicFormControllerComponent,
  props: {
    type: radios('type', FORM_CONTROLLER_TYPE, FORM_CONTROLLER_TYPE.MONTH),
    label: text('label', 'label'),
    columnSize: ['col-md-4'],
    offsetSize: ['offset-md-4'],
    name: text('name', ''),
    placeholder: text('placeholder', 'Place Holder'),
    disabled: boolean('disabled', false),
    min: number('min', 0),
    max: number('max', 0),
    required: boolean('required', false),
  },
  template: `
      <div class="row">
        <ksk-dynamic-form-controller [placeholder]="placeholder" [max]="max" [min]="min" [required]="required" [name]="name" [disabled]="disabled" [offsetSize]="offsetSize" [columnSize]="columnSize" [type]="type" [label]="label"></ksk-dynamic-form-controller>
      </div>
   `
});
export const NumberFormController = () => ({
  component: DynamicFormControllerComponent,
  props: {
    type: radios('type', FORM_CONTROLLER_TYPE, FORM_CONTROLLER_TYPE.NUMBER),
    label: text('label', 'label'),
    columnSize: ['col-md-4'],
    offsetSize: ['offset-md-4'],
    name: text('name', ''),
    placeholder: text('placeholder', 'Place Holder'),
    disabled: boolean('disabled', false),
    min: number('min', 0),
    max: number('max', 0),
    required: boolean('required', false),
  },
  template: `
      <div class="row">
        <ksk-dynamic-form-controller [placeholder]="placeholder" [max]="max" [min]="min" [required]="required" [name]="name" [disabled]="disabled" [offsetSize]="offsetSize" [columnSize]="columnSize" [type]="type" [label]="label"></ksk-dynamic-form-controller>
      </div>
   `
});
export const PasswordFormController = () => ({
  component: DynamicFormControllerComponent,
  props: {
    type: radios('type', FORM_CONTROLLER_TYPE, FORM_CONTROLLER_TYPE.PASSWORD),
    label: text('label', 'label'),
    columnSize: ['col-md-4'],
    offsetSize: ['offset-md-4'],
    name: text('name', ''),
    placeholder: text('placeholder', 'Place Holder'),
    disabled: boolean('disabled', false),
    min: number('min', 0),
    max: number('max', 0),
    required: boolean('required', false),
  },
  template: `
      <div class="row">
        <ksk-dynamic-form-controller [placeholder]="placeholder" [max]="max" [min]="min" [required]="required" [name]="name" [disabled]="disabled" [offsetSize]="offsetSize" [columnSize]="columnSize" [type]="type" [label]="label"></ksk-dynamic-form-controller>
      </div>
   `
});
export const SearchFormController = () => ({
  component: DynamicFormControllerComponent,
  props: {
    type: radios('type', FORM_CONTROLLER_TYPE, FORM_CONTROLLER_TYPE.SEARCH),
    label: text('label', 'label'),
    columnSize: ['col-md-4'],
    offsetSize: ['offset-md-4'],
    name: text('name', ''),
    placeholder: text('placeholder', 'Place Holder'),
    disabled: boolean('disabled', false),
    min: number('min', 0),
    max: number('max', 0),
    required: boolean('required', false),
  },
  template: `
      <div class="row">
        <ksk-dynamic-form-controller [placeholder]="placeholder" [max]="max" [min]="min" [required]="required" [name]="name" [disabled]="disabled" [offsetSize]="offsetSize" [columnSize]="columnSize" [type]="type" [label]="label"></ksk-dynamic-form-controller>
      </div>
   `
});
export const TelFormController = () => ({
  component: DynamicFormControllerComponent,
  props: {
    type: radios('type', FORM_CONTROLLER_TYPE, FORM_CONTROLLER_TYPE.TEL),
    label: text('label', 'label'),
    columnSize: ['col-md-4'],
    offsetSize: ['offset-md-4'],
    name: text('name', ''),
    placeholder: text('placeholder', 'Place Holder'),
    disabled: boolean('disabled', false),
    min: number('min', 0),
    max: number('max', 0),
    required: boolean('required', false),
  },
  template: `
      <div class="row">
        <ksk-dynamic-form-controller [placeholder]="placeholder" [max]="max" [min]="min" [required]="required" [name]="name" [disabled]="disabled" [offsetSize]="offsetSize" [columnSize]="columnSize" [type]="type" [label]="label"></ksk-dynamic-form-controller>
      </div>
   `
});
export const TextFormController = () => ({
  component: DynamicFormControllerComponent,
  props: {
    type: radios('type', FORM_CONTROLLER_TYPE, FORM_CONTROLLER_TYPE.TEXT),
    label: text('label', 'label'),
    columnSize: ['col-md-4'],
    offsetSize: ['offset-md-4'],
    name: text('name', ''),
    placeholder: text('placeholder', 'Place Holder'),
    disabled: boolean('disabled', false),
    min: number('min', 0),
    max: number('max', 0),
    required: boolean('required', false),
  },
  template: `
      <div class="row">
        <ksk-dynamic-form-controller [placeholder]="placeholder" [max]="max" [min]="min" [required]="required" [name]="name" [disabled]="disabled" [offsetSize]="offsetSize" [columnSize]="columnSize" [type]="type" [label]="label"></ksk-dynamic-form-controller>
      </div>
   `
});
export const TimeFormController = () => ({
  component: DynamicFormControllerComponent,
  props: {
    type: radios('type', FORM_CONTROLLER_TYPE, FORM_CONTROLLER_TYPE.TIME),
    label: text('label', 'label'),
    columnSize: ['col-md-4'],
    offsetSize: ['offset-md-4'],
    name: text('name', ''),
    placeholder: text('placeholder', 'Place Holder'),
    disabled: boolean('disabled', false),
    min: number('min', 0),
    max: number('max', 0),
    required: boolean('required', false),
  },
  template: `
      <div class="row">
        <ksk-dynamic-form-controller [placeholder]="placeholder" [max]="max" [min]="min" [required]="required" [name]="name" [disabled]="disabled" [offsetSize]="offsetSize" [columnSize]="columnSize" [type]="type" [label]="label"></ksk-dynamic-form-controller>
      </div>
   `
});
export const UrlFormController = () => ({
  component: DynamicFormControllerComponent,
  props: {
    type: radios('type', FORM_CONTROLLER_TYPE, FORM_CONTROLLER_TYPE.URL),
    label: text('label', 'label'),
    columnSize: ['col-md-4'],
    offsetSize: ['offset-md-4'],
    name: text('name', ''),
    placeholder: text('placeholder', 'Place Holder'),
    disabled: boolean('disabled', false),
    min: number('min', 0),
    max: number('max', 0),
    required: boolean('required', false),
  },
  template: `
      <div class="row">
        <ksk-dynamic-form-controller [placeholder]="placeholder" [max]="max" [min]="min" [required]="required" [name]="name" [disabled]="disabled" [offsetSize]="offsetSize" [columnSize]="columnSize" [type]="type" [label]="label"></ksk-dynamic-form-controller>
      </div>
   `
});
export const WeekFormController = () => ({
  component: DynamicFormControllerComponent,
  props: {
    type: radios('type', FORM_CONTROLLER_TYPE, FORM_CONTROLLER_TYPE.WEEK),
    label: text('label', 'label'),
    columnSize: ['col-md-4'],
    offsetSize: ['offset-md-4'],
    name: text('name', ''),
    placeholder: text('placeholder', 'Place Holder'),
    disabled: boolean('disabled', false),
    min: number('min', 0),
    max: number('max', 0),
    required: boolean('required', false),
  },
  template: `
      <div class="row">
        <ksk-dynamic-form-controller [placeholder]="placeholder" [max]="max" [min]="min" [required]="required" [name]="name" [disabled]="disabled" [offsetSize]="offsetSize" [columnSize]="columnSize" [type]="type" [label]="label"></ksk-dynamic-form-controller>
      </div>
   `
});
export const SelectFormController = () => ({
  component: DynamicFormControllerComponent,
  props: {
    type: radios('type', FORM_CONTROLLER_TYPE, FORM_CONTROLLER_TYPE.SELECT),
    label: text('label', 'label'),
    columnSize: ['col-md-4'],
    offsetSize: ['offset-md-4'],
    name: text('name', ''),
    placeholder: text('placeholder', 'Place Holder'),
    disabled: boolean('disabled', false),
    min: number('min', 0),
    max: number('max', 0),
    required: boolean('required', false),
    multiple: boolean('multiple', false),
  },
  template: `
      <div class="row">
        <ksk-dynamic-form-controller [multiple]="multiple" [placeholder]="placeholder" [max]="max" [min]="min" [required]="required" [name]="name" [disabled]="disabled" [offsetSize]="offsetSize" [columnSize]="columnSize" [type]="type" [label]="label"></ksk-dynamic-form-controller>
      </div>
   `
});

