import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DynamicFormControllerComponent} from './dynamic-form-controller/dynamic-form-controller.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormControllerComponent,
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports: [
    DynamicFormComponent,
    DynamicFormControllerComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule
  ]
})
export class DynamicFormModule {
}
