import { makeAutoObservable } from 'mobx';

import { TREE } from '@/shared/ui/CheckboxTree/model/constants.ts';

export interface TreeNode {
  /**
   * Идентификатор узла
   */
  id: string;
  /**
   * Название узла
   */
  label: string;
  /**
   * Состояние чекбокса
   */
  isChecked: boolean;
  /**
   * Состояние indeterminate
   */
  isIndeterminate: boolean;
  /**
   * Дочерние узлы
   */
  children?: TreeNode[];
}

export class TreeStore {
  tree: TreeNode[] = TREE;

  constructor() {
    makeAutoObservable(this);
  }

  initialData(data: TreeNode[]) {
    this.tree = data;
  }

  updateTree(node: TreeNode, parent: TreeNode | null = null) {
    if (node.children) {
      const allChecked = node.children.every((sub) => sub.isChecked);
      const someChecked = node.children.some((sub) => sub.isChecked || sub.isIndeterminate);

      node.isChecked = allChecked;
      node.isIndeterminate = someChecked && !allChecked;
    }

    if (parent) {
      this.updateTree(parent, this.findParent(parent));
    }
  }

  findParent(
    childTask: TreeNode,
    _parent: TreeNode | null = null,
    tree: TreeNode[] = this.tree
  ): TreeNode | null {
    for (const node of tree) {
      if (node.children?.includes(childTask)) {
        return node;
      }
      if (node.children) {
        const found = this.findParent(childTask, node, node.children);
        if (found) return found;
      }
    }
    return null;
  }

  switcher(node: TreeNode, isChecked: boolean): void {
    node.isChecked = isChecked;
    node.isIndeterminate = false;

    if (node.children) {
      node.children.forEach((sub) => this.switcher(sub, isChecked));
    }

    const parent = this.findParent(node);
    if (parent) {
      this.updateTree(parent, this.findParent(parent));
    }
  }
}

export const treeStore = new TreeStore();
