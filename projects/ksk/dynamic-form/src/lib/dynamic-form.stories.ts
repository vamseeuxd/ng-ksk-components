import {moduleMetadata} from '@storybook/angular';
import {Story, Meta} from '@storybook/angular/types-6-0';
import {DynamicFormModule} from './dynamic-form.module';
import {boolean, number, radios, text} from '@storybook/addon-knobs';
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


export const EmailFormController = () => ({
  component: DynamicFormControllerComponent,
  props: {
    type: radios('type', FORM_CONTROLLER_TYPE, FORM_CONTROLLER_TYPE.EMAIL),
    label: text('label', 'label'),
    columnSize:['col-md-4'],
    offsetSize:[ 'offset-md-4'],
    name:text('name',''),
    placeholder:text('placeholder','Place Holder'),
    disabled:boolean('disabled', false),
    min:number('min',0),
    max:number('max',0),
    required:boolean('required', false),
  },
  template: `
      <div class="row">
        <ksk-dynamic-form-controller [placeholder]="placeholder" [max]="max" [min]="min" [required]="required" [name]="name" [disabled]="disabled" [offsetSize]="offsetSize" [columnSize]="columnSize" [type]="type" [label]="label"></ksk-dynamic-form-controller>
      </div>
   `
});
export const ColorFormController = () => ({
  component: DynamicFormControllerComponent,
  props: {
    type: radios('type', FORM_CONTROLLER_TYPE, FORM_CONTROLLER_TYPE.COLOR),
    label: text('label', 'label'),
    columnSize:['col-md-4'],
    offsetSize:[ 'offset-md-4'],
    name:text('name',''),
    placeholder:text('placeholder','Place Holder'),
    disabled:boolean('disabled', false),
    min:number('min',0),
    max:number('max',0),
    required:boolean('required', false),
  },
  template: `
      <div class="row">
        <ksk-dynamic-form-controller [placeholder]="placeholder" [max]="max" [min]="min" [required]="required" [name]="name" [disabled]="disabled" [offsetSize]="offsetSize" [columnSize]="columnSize" [type]="type" [label]="label"></ksk-dynamic-form-controller>
      </div>
   `
});
export const DateFormController = () => ({
  component: DynamicFormControllerComponent,
  props: {
    type: radios('type', FORM_CONTROLLER_TYPE, FORM_CONTROLLER_TYPE.DATE),
    label: text('label', 'label'),
    columnSize:['col-md-4'],
    offsetSize:[ 'offset-md-4'],
    name:text('name',''),
    placeholder:text('placeholder','Place Holder'),
    disabled:boolean('disabled', false),
    min:number('min',0),
    max:number('max',0),
    required:boolean('required', false),
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
    columnSize:['col-md-4'],
    offsetSize:[ 'offset-md-4'],
    name:text('name',''),
    placeholder:text('placeholder','Place Holder'),
    disabled:boolean('disabled', false),
    min:number('min',0),
    max:number('max',0),
    required:boolean('required', false),
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
    columnSize:['col-md-4'],
    offsetSize:[ 'offset-md-4'],
    name:text('name',''),
    placeholder:text('placeholder','Place Holder'),
    disabled:boolean('disabled', false),
    min:number('min',0),
    max:number('max',0),
    required:boolean('required', false),
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
    columnSize:['col-md-4'],
    offsetSize:[ 'offset-md-4'],
    name:text('name',''),
    placeholder:text('placeholder','Place Holder'),
    disabled:boolean('disabled', false),
    min:number('min',0),
    max:number('max',0),
    required:boolean('required', false),
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
    columnSize:['col-md-4'],
    offsetSize:[ 'offset-md-4'],
    name:text('name',''),
    placeholder:text('placeholder','Place Holder'),
    disabled:boolean('disabled', false),
    min:number('min',0),
    max:number('max',0),
    required:boolean('required', false),
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
    columnSize:['col-md-4'],
    offsetSize:[ 'offset-md-4'],
    name:text('name',''),
    placeholder:text('placeholder','Place Holder'),
    disabled:boolean('disabled', false),
    min:number('min',0),
    max:number('max',0),
    required:boolean('required', false),
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
    columnSize:['col-md-4'],
    offsetSize:[ 'offset-md-4'],
    name:text('name',''),
    placeholder:text('placeholder','Place Holder'),
    disabled:boolean('disabled', false),
    min:number('min',0),
    max:number('max',0),
    required:boolean('required', false),
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
    columnSize:['col-md-4'],
    offsetSize:[ 'offset-md-4'],
    name:text('name',''),
    placeholder:text('placeholder','Place Holder'),
    disabled:boolean('disabled', false),
    min:number('min',0),
    max:number('max',0),
    required:boolean('required', false),
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
    columnSize:['col-md-4'],
    offsetSize:[ 'offset-md-4'],
    name:text('name',''),
    placeholder:text('placeholder','Place Holder'),
    disabled:boolean('disabled', false),
    min:number('min',0),
    max:number('max',0),
    required:boolean('required', false),
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
    columnSize:['col-md-4'],
    offsetSize:[ 'offset-md-4'],
    name:text('name',''),
    placeholder:text('placeholder','Place Holder'),
    disabled:boolean('disabled', false),
    min:number('min',0),
    max:number('max',0),
    required:boolean('required', false),
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
    columnSize:['col-md-4'],
    offsetSize:[ 'offset-md-4'],
    name:text('name',''),
    placeholder:text('placeholder','Place Holder'),
    disabled:boolean('disabled', false),
    min:number('min',0),
    max:number('max',0),
    required:boolean('required', false),
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
    columnSize:['col-md-4'],
    offsetSize:[ 'offset-md-4'],
    name:text('name',''),
    placeholder:text('placeholder','Place Holder'),
    disabled:boolean('disabled', false),
    min:number('min',0),
    max:number('max',0),
    required:boolean('required', false),
    multiple:boolean('multiple', false),
  },
  template: `
      <div class="row">
        <ksk-dynamic-form-controller [multiple]="multiple" [placeholder]="placeholder" [max]="max" [min]="min" [required]="required" [name]="name" [disabled]="disabled" [offsetSize]="offsetSize" [columnSize]="columnSize" [type]="type" [label]="label"></ksk-dynamic-form-controller>
      </div>
   `
});

