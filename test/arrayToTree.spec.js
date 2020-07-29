const { arrayToTree } = require('..');
const arrayToTreeData = require('./data/arrayToTree');

it('arrayToTree simple', () => {
  const { tree, list } = arrayToTreeData.simple;
  expect(arrayToTree(list)).toEqual(tree);
});

it('arrayToTree option:idKey&pIdKey', () => {
  const { tree, list } = arrayToTreeData.key;
  const result = arrayToTree(list, {
    idKey: 'ID',
    pIdKey: 'pId'
  });
  expect(result).toEqual(tree);
});

it('arrayToTree option:inValidKey', () => {
  const spy = jest.spyOn(console, 'error').mockReturnValue();
  const { list } = arrayToTreeData.inValidKey;
  const result = arrayToTree(list, {
    idKey: 'prop.id'
  });
  // idKey不正确，关系无法建立，最后全部原封不动
  expect(result).toEqual(list);
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});

it('arrayToTree option:isKeyChain', () => {
  const { tree, list } = arrayToTreeData.isKeyChain;
  const result = arrayToTree(list, {
    idKey: 'prop.id',
    pIdKey: 'prop.parentId'
  });
  expect(result).toEqual(tree);
});

it('arrayToTree option:isKeyChain=false', () => {
  const { tree, list } = arrayToTreeData.isKeyChainFalse;
  const result = arrayToTree(list, {
    idKey: 'prop.id',
    isKeyChain: false
  });
  expect(result).not.toEqual(tree);
});

it('arrayToTree option:detached', () => {
  const { tree, list } = arrayToTreeData.detached;
  expect(arrayToTree(list)).toEqual(tree);
});

it('arrayToTree option:detached=false', () => {
  // 不想在跑测试用例时，看到console信息
  const spy = jest.spyOn(console, 'error').mockReturnValue();
  const { tree, list } = arrayToTreeData.detachedFalse;
  const result = arrayToTree(list, {
    detached: false
  });
  expect(result).toEqual(tree);
  // 看不到console信息，但要确保它确实有执行console
  expect(spy).toHaveBeenCalled();
  // 还原console.error
  spy.mockRestore();
});

it('arrayToTree option:sortKey&order=ascending', () => {
  const { tree, list } = arrayToTreeData.sortKey;
  const result = arrayToTree(list, {
    sortKey: 'sort'
  });
  expect(result).toEqual(tree);
});

it('arrayToTree option:sortKey&order=descending', () => {
  const { tree, list } = arrayToTreeData.sortKeyDescending;
  const result = arrayToTree(list, {
    sortKey: 'sort',
    order: 'descending'
  });
  expect(result).toEqual(tree);
});

it('arrayToTree option:traverse', () => {
  const { tree, list } = arrayToTreeData.traverse;
  const traverse = jest.fn();
  const result = arrayToTree(list, {
    traverse
  });
  expect(result).toEqual(tree);
  expect(traverse).toBeCalledWith(tree[0].children[0], tree[0]);
  expect(traverse).toBeCalledWith(tree[0], null);
});
