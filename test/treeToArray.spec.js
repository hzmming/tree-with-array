const { treeToArray } = require('..');
const treeToArrayData = require('./data/treeToArray');

it('treeToArray simple', () => {
  const { tree, list } = treeToArrayData.simple;
  expect(treeToArray(tree)).toEqual(list);
});

it('treeToArray option:childrenKey', () => {
  const { tree, list } = treeToArrayData.childrenKey;
  const result = treeToArray(tree, {
    childrenKey: 'child'
  });
  expect(result).toEqual(list);
});
