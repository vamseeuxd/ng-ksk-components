import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {TextInputComponent} from './text-input.component';
import {TextInputModule} from './text-input.module';


export default {
  title: '@ksk/ksk-textInput',
  component: TextInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [TextInputModule],
    }),
  ],
} as Meta;

const Template: Story<TextInputComponent> = (args: TextInputComponent) => ({
  component: TextInputComponent,
  props: args,
});


export const TextInputDefaultValue = Template.bind({});
TextInputDefaultValue.args = {};
