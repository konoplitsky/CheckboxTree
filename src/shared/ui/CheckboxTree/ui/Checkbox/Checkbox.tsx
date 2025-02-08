import { observer } from 'mobx-react-lite';
import type { ComponentProps } from 'react';
import { useEffect, useRef } from 'react';

import styles from './Checkbox.module.scss';

interface CheckBoxProps extends ComponentProps<'input'> {
  isChecked: boolean;
  isIndeterminate: boolean;
  label: string;
}

export const CheckBox = observer((props: CheckBoxProps) => {
  const { isChecked, isIndeterminate, label, ...rest } = props;
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = isChecked;
      checkboxRef.current.indeterminate = isIndeterminate;
    }
  }, [isChecked, isIndeterminate]);

  return (
    <div className={styles.checkbox}>
      <input type='checkbox' id={label} ref={checkboxRef} {...rest} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
});
