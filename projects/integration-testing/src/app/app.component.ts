import {Component} from '@angular/core';
import {
  getDynamicFormController,
  DynamicFormControllerInterface
} from '../../../ksk/dynamic-form/src/lib/interface/dynamic-form-controller.interface';
import {FORM_CONTROLLER_TYPE} from '../../../ksk/dynamic-form/src/lib/interface/form-controller.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showTabs = {
    basicDetails: true,
    requiredValidation: true,
    minMaxValidation: true,
    patternValidation: true,
    emailValidation: true,
    duplicateValidation: true,
    dataProvider: true,
  }

  value = {
    type: '',
    name: '',
    label: '',
    value: '',
    placeholder: '',
    controllerClass: '',
    columnClass: '',
    hide: false,
    showInGrid: true,
    disabled: false,
    multiple: false,
    required: true,
    requiredError: '',
    minlength: '',
    minlengthError: '',
    maxlength: '',
    maxlengthError: '',
    min: '',
    minError: '',
    max: '',
    maxError: '',
    pattern: '',
    patternError: '',
    emailError: '',
    duplicateMessage: '',
    dataProvider: '',
  }


  showInfo = {
    showType: true,
    showHide: false,
    showShowInGrid: true,
    showControllerClass: true,
    showColumnClass: true,
    showLabel: true,
    showValue: true,
    showName: true,
    showDisabled: false,
    showRequired: true,
    showMinlength: true,
    showMaxlength: true,
    showMin: true,
    showMax: true,
    showPattern: true,
    showPlaceholder: true,
    showRequiredError: true,
    showEmailError: true,
    showMinError: true,
    showMaxError: true,
    showMinlengthError: true,
    showMaxlengthError: true,
    showPatternError: true,
    showDuplicateMessage: true,
    showMultiple: true,
    showDataProvider: true,
  }

  formControls: DynamicFormControllerInterface[] = [
    getDynamicFormController(FORM_CONTROLLER_TYPE.TEXT, 'First Name', 'Vamsee Kalyan', 'firstName', 'Enter First Name', {required: true}),
  ];

  resetValidations() {
    this.showInfo = {
      showType: true,
      showHide: true,
      showShowInGrid: true,
      showControllerClass: true,
      showColumnClass: true,
      showLabel: true,
      showValue: true,
      showName: true,
      showDisabled: true,
      showRequired: true,
      showMinlength: true,
      showMaxlength: true,
      showMin: true,
      showMax: true,
      showPattern: true,
      showPlaceholder: true,
      showRequiredError: true,
      showEmailError: true,
      showMinError: true,
      showMaxError: true,
      showMinlengthError: true,
      showMaxlengthError: true,
      showPatternError: true,
      showDuplicateMessage: true,
      showMultiple: true,
      showDataProvider: true,
    }
    this.showTabs = {
      basicDetails: true,
      requiredValidation: true,
      minMaxValidation: true,
      patternValidation: true,
      emailValidation: true,
      duplicateValidation: true,
      dataProvider: true,
    }
  }

  onTypeChange(type: FORM_CONTROLLER_TYPE) {
    this.resetValidations();
    switch (type) {
      case FORM_CONTROLLER_TYPE.EMAIL:
        this.showTabs.minMaxValidation = false;
        this.showTabs.patternValidation = false;
        this.showTabs.dataProvider = false;
        break;
      case FORM_CONTROLLER_TYPE.COLOR:
        this.showTabs.minMaxValidation = false;
        this.showTabs.patternValidation = false;
        this.showTabs.emailValidation = false;
        this.showTabs.dataProvider = false;
        break;
      case FORM_CONTROLLER_TYPE.DATE:
        this.showTabs.patternValidation = false;
        this.showTabs.emailValidation = false;
        this.showTabs.dataProvider = false;
        break;
      case FORM_CONTROLLER_TYPE.DATETIME:
        this.showTabs.patternValidation = false;
        this.showTabs.emailValidation = false;
        this.showTabs.dataProvider = false;
        break;
      case FORM_CONTROLLER_TYPE.MONTH:
        this.showTabs.patternValidation = false;
        this.showTabs.emailValidation = false;
        this.showTabs.dataProvider = false;
        break;
      case FORM_CONTROLLER_TYPE.NUMBER:
        this.showTabs.patternValidation = false;
        this.showTabs.emailValidation = false;
        this.showTabs.dataProvider = false;
        break;
      case FORM_CONTROLLER_TYPE.PASSWORD:
        this.showTabs.emailValidation = false;
        this.showTabs.dataProvider = false;
        break;
      case FORM_CONTROLLER_TYPE.SEARCH:
        this.showTabs.emailValidation = false;
        this.showTabs.dataProvider = false;
        break;
      case FORM_CONTROLLER_TYPE.TEL:
        this.showTabs.minMaxValidation = false;
        this.showTabs.patternValidation = false;
        this.showTabs.emailValidation = false;
        this.showTabs.dataProvider = false;
        break;
      case FORM_CONTROLLER_TYPE.TEXT:
        this.showTabs.emailValidation = false;
        this.showTabs.dataProvider = false;
        break;
      case FORM_CONTROLLER_TYPE.TIME:
        this.showTabs.patternValidation = false;
        this.showTabs.emailValidation = false;
        this.showTabs.dataProvider = false;
        break;
      case FORM_CONTROLLER_TYPE.URL:
        this.showTabs.minMaxValidation = false;
        this.showTabs.patternValidation = false;
        this.showTabs.emailValidation = false;
        this.showTabs.dataProvider = false;
        break;
      case FORM_CONTROLLER_TYPE.WEEK:
        this.showTabs.patternValidation = false;
        this.showTabs.emailValidation = false;
        this.showTabs.dataProvider = false;
        break;
      case FORM_CONTROLLER_TYPE.SELECT:
        this.showTabs.minMaxValidation = false;
        this.showTabs.patternValidation = false;
        this.showTabs.emailValidation = false;
        this.showTabs.dataProvider = false;
        break;
      case FORM_CONTROLLER_TYPE.RADIO:
        this.showTabs.minMaxValidation = false;
        this.showTabs.patternValidation = false;
        this.showTabs.emailValidation = false;
        break;
      case FORM_CONTROLLER_TYPE.CHIPS:
        this.showTabs.patternValidation = false;
        this.showTabs.emailValidation = false;
        break;
    }
  }
}
