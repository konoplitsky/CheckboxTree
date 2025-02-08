import { nanoid } from 'nanoid';

export const TREE = [
  {
    id: nanoid(),
    label: 'src',
    isChecked: false,
    isIndeterminate: false,
    children: [
      {
        id: nanoid(),
        label: 'app',
        isChecked: false,
        isIndeterminate: false,
        children: [
          { id: nanoid(), label: 'styles', isChecked: false, isIndeterminate: false },
          { id: nanoid(), label: 'App.tsx', isChecked: false, isIndeterminate: false }
        ]
      },
      {
        id: nanoid(),
        label: 'shared',
        isChecked: false,
        isIndeterminate: false,
        children: [
          { id: nanoid(), label: 'ui', isChecked: false, isIndeterminate: false },
          { id: nanoid(), label: 'lib', isChecked: false, isIndeterminate: false }
        ]
      },
      { id: nanoid(), label: 'main.tsx', isChecked: false, isIndeterminate: false }
    ]
  }
];
