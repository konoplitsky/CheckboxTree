import type { Meta, StoryObj } from '@storybook/react';

import { CheckBox } from './Checkbox';

const meta: Meta<typeof CheckBox> = {
  title: 'Components/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  argTypes: {
    isChecked: {
      control: 'boolean',
      description: 'Состояние чекбокса (включен/выключен)'
    },
    isIndeterminate: {
      control: 'boolean',
      description: 'Состояние indeterminate'
    },
    label: {
      control: 'text',
      description: 'Текст метки чекбокса'
    }
  },
  parameters: {
    layout: 'centered'
  }
};

export default meta;

export const Checked: StoryObj<typeof CheckBox> = {
  args: {
    isChecked: true,
    isIndeterminate: false,
    label: 'shared'
  }
};

export const Unchecked: StoryObj<typeof CheckBox> = {
  args: {
    isChecked: false,
    isIndeterminate: false,
    label: 'shared'
  }
};

export const Indeterminate: StoryObj<typeof CheckBox> = {
  args: {
    isChecked: false,
    isIndeterminate: true,
    label: 'shared'
  }
};
