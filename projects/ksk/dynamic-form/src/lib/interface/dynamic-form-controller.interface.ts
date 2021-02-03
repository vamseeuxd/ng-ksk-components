import {FORM_CONTROLLER_TYPE} from './form-controller.enum';
import {COLUMN_SIZE_TYPE} from './column-size.type';
import {OFFSET_SIZE_TYPE} from './offset-size.type';

export interface DynamicFormControllerInterface {
  type: FORM_CONTROLLER_TYPE;
  columnSize: COLUMN_SIZE_TYPE[];
  offsetSize: OFFSET_SIZE_TYPE[];
  label: string;
  name: string;
  placeholder: string;
  defaultValue: any;
  required?: boolean;
  disabled?: boolean;
  hide?: boolean;
  showInGrid?: boolean;
  controllerClass?: string;
  min?: number;
  max?: number;
  pattern?: string;
  requiredError?: string;
  emailError?: string;
  minError?: string;
  maxError?: string;
  patternError?: string;
  duplicateMessage?: string;
  multiple?: boolean;
  dataProvider?: {
    identifyBy: string;
    displayBy: string;
    data: any[];
  };
}

export function getDynamicFormController(
  type: FORM_CONTROLLER_TYPE,
  label: string,
  value: any,
  name: string,
  placeholder: string,
  props = {},
  columnSize: COLUMN_SIZE_TYPE[] = ['col-md-4'],
  offsetSize: OFFSET_SIZE_TYPE[] = [],
): DynamicFormControllerInterface {
  return {
    type,
    label,
    defaultValue: value,
    name,
    placeholder,
    columnSize,
    offsetSize,
    ...props
  };
}

