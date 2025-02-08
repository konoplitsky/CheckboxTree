import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import type { TreeNode } from './model/store/TreeStore.ts';
import { treeStore } from './model/store/TreeStore.ts';
import { CheckBox } from './ui/Checkbox/Checkbox.tsx';

import styles from './CheckoxTree.module.scss';

interface CheckboxTreeProps {
  data: TreeNode[];
}

export const CheckboxTree = observer(({ data }: CheckboxTreeProps) => {
  useEffect(() => {
    treeStore.initialData(data);
  }, [data]);

  const renderTasks = (tree: TreeNode[]) => {
    return tree.map((node) => (
      <div className={styles.checkboxTree} key={node.label}>
        <CheckBox
          label={node.label}
          isChecked={node.isChecked}
          isIndeterminate={node.isIndeterminate}
          onChange={() => treeStore.switcher(node, !node.isChecked)}
        />
        {node.children && <div className={styles.child}>{renderTasks(node.children)}</div>}
      </div>
    ));
  };

  return renderTasks(treeStore.tree);
});
