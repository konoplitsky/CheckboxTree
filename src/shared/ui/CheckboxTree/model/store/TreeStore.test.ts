import { describe, expect, it } from 'vitest';

import { TREE } from '../constants.ts';

import type { TreeNode } from './TreeStore';
import { TreeStore } from './TreeStore';

describe('TreeStore', () => {
  let treeStore: TreeStore;

  beforeEach(() => {
    treeStore = new TreeStore();
  });

  it('should initialize with default data', () => {
    expect(treeStore.tree).toEqual(TREE);
  });

  it('should set initial data', () => {
    const newTree: TreeNode[] = [
      {
        id: '1',
        label: 'new tree',
        isChecked: false,
        isIndeterminate: false,
        children: []
      }
    ];
    treeStore.initialData(newTree);

    expect(treeStore.tree).toEqual(newTree);
  });

  it('should switch the state of a node', () => {
    const node = treeStore.tree[0];
    treeStore.switcher(node, true);

    expect(node.isChecked).toBe(true);
    expect(node.isIndeterminate).toBe(false);

    if (node.children) {
      node.children.forEach((child) => {
        expect(child.isChecked).toBe(true);
      });
    }
  });

  it('should update parent nodes when a child node is checked', () => {
    const rootNode = treeStore.tree[0];
    expect(rootNode).toBeDefined();

    if (!rootNode.children) {
      throw new Error('Root node does not have any children');
    }

    const node = rootNode.children[0];
    treeStore.switcher(node, true);

    const parent = treeStore.findParent(node);
    expect(parent).not.toBeNull();

    if (parent) {
      expect(parent.isChecked).toBe(false);
      expect(parent.isIndeterminate).toBe(true);
    }
  });

  it('should correctly find a parent node', () => {
    const rootNode = treeStore.tree[0];
    expect(rootNode).toBeDefined();

    if (!rootNode.children) {
      throw new Error('Root node does not have any children');
    }

    const node = rootNode.children[0];
    const parent = treeStore.findParent(node);

    expect(parent).toEqual(treeStore.tree[0]);
  });
});
