import {Component, Input} from '@angular/core';

@Component({
  selector: 'ksk-textInput',
  template: `
    <div class="form-group">
      <label [for]="id">{{label}}</label>
      <input type="text" class="form-control" [id]="id">
      <small [id]="id+'Help'" class="form-text text-muted">{{help}}</small>
    </div>
  `,
  styles: []
})
export class TextInputComponent {

  @Input() label = '';
  @Input() id = '';
  @Input() help = '';

}
