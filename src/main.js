function treeToArray(tree, option = {}) {
  const list = [];

  const { childrenKey = 'children' } = option;

  function flattenTree(tree) {
    list.includes(tree) || list.push(tree);
    Array.isArray(tree[childrenKey]) &&
      tree[childrenKey].forEach(item => {
        flattenTree(item);
      });
  }

  tree.forEach(item => flattenTree(item));

  return list;
}

function arrayToTree(list, option = {}) {
  const cache = {};
  const roots = [];

  const {
    idKey = 'id', // 支持链式调用，如 properties.id
    pIdKey = 'parentId', // 支持链式调用
    isKeyChain = true, // 设为false，关闭idKey和pIdKey的链式调用
    detached = true,
    sortKey = '', // 指定排序字段，若为空，不排序
    order = 'ascending', // ascending: 升序，descending: 降序
    traverse = () => {} // traverse(node, parent) 若不存在父亲，则parent为null
  } = option;

  /**
   * 排序相关
   * QUESTION: 当元素不具备[sortKey]字段，或其值为undefined，该元素位置将不会变化（可能这就是所谓的原地算法吧），这是否合理？
   */
  const ascending = (a, b) => a[sortKey] - b[sortKey];
  const descending = (a, b) => b[sortKey] - a[sortKey];
  const sortFunc = order === 'descending' ? descending : ascending;
  const doSort = arr => arr.length > 1 && arr.sort(sortFunc);
  /**
   * 思路：循环所有节点，对每个节点进行如下动作
   *  1. 找父亲，没父亲则为根节点
   *  2. 找到父亲，将当前节点添加进父亲的children数组
   *
   * 利用对象引用的原理，最终只要返回roots数组即可
   */
  list.forEach(item => {
    const pid = isKeyChain ? getChainVal(item, pIdKey) : item[pIdKey];
    // 1. 父亲id不存在，根节点
    if (typeof pid === 'undefined') {
      traverse(item, null);
      return roots.push(item);
    }
    const childNode = item;
    const parentNode = getNodeByPropId(pid);
    /**
     * 2. 指明了父亲id，但根本不存在对应节点，两种处理
     *  (1) 直接丢弃，并且在控制台输出错误信息
     *  (2) 直接作为根节点
     */
    if (!parentNode) {
      if (detached) {
        traverse(childNode, null);
        roots.push(childNode);
        return;
      }
      return console.error(
        `${childNode.name} 的父亲，id为 ${pid} 的节点不存在`
      );
    }
    // 3. 找到父亲后，将自己添加进父亲的children数组
    const children = (parentNode.children = parentNode.children || []);
    if (!children.includes(childNode)) {
      traverse(childNode, parentNode);
      children.push(childNode);
    }
  });

  // 排序
  if (sortKey) {
    doSort(roots);
    list.forEach(i => i.children && doSort(i.children));
  }

  /**
   * 根据id获取节点
   * @param {节点id} id
   */
  function getNodeByPropId(id) {
    if (cache[id]) {
      return cache[id];
    }
    const node = list.find(
      item => (isKeyChain ? getChainVal(item, idKey) : item[idKey]) === id
    );
    if (node) {
      cache[id] = node;
      return node;
    }
    return null;
  }

  function getChainVal(obj, propPath) {
    const propList = propPath.split('.');
    let result = undefined;
    try {
      propList.forEach(prop => {
        result = obj[prop];
        obj = result;
      });
    } catch (e) {
      console.error(`'${propPath}'路径不合法`);
      result = undefined;
    }
    return result;
  }

  return roots;
}

export { treeToArray, arrayToTree };
