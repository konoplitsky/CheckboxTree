import { TREE } from '@/shared/ui/CheckboxTree/model/constants.ts';
import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxTree } from './CheckboxTree.tsx';

const meta: Meta<typeof CheckboxTree> = {
  component: CheckboxTree,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof CheckboxTree>;

export const Data: Story = {
  args: {
    data: TREE
  }
};
