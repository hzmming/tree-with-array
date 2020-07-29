# tree-with-array

Conversion between tree data and array data

## Install

```shell
npm i tree-with-array
```

## Usage

**arrayToTree**

```javascript
const { arrayToTree } = require('tree-with-array');
const list = [
  {
    id: '0'
  },
  {
    id: '0-1',
    parentId: '0'
  },
  {
    id: '0-1-1',
    parentId: '0-1'
  },
  {
    id: '0-2',
    parentId: '0'
  },
  {
    id: '1'
  }
];
const tree = arrayToTree(list);
console.log(tree);
/*
  [
    {
      id: '0',
      children: [
        {
          id: '0-1',
          parentId: '0',
          children: [
            {
              id: '0-1-1',
              parentId: '0-1'
            }
          ]
        },
        {
          id: '0-2',
          parentId: '0'
        }
      ]
    },
    {
      id: '1'
    }
  ];
*/
```

**treeToArray**

```javascript
const { treeToArray } = require('tree-with-array');
const tree = [
  {
    id: '0',
    children: [
      {
        id: '0-1',
        children: [
          {
            id: '0-1-1'
          }
        ]
      },
      {
        id: '0-2'
      }
    ]
  },
  {
    id: '1'
  }
];
const list = treeToArray(tree);
console.log(list);
/* 
  [
    {
      id: '0',
      children: [
        {
          id: '0-1',
          children: [
            {
              id: '0-1-1'
            }
          ]
        },
        {
          id: '0-2'
        }
      ]
    },
    {
      id: '0-1',
      children: [
        {
          id: '0-1-1'
        }
      ]
    },
    {
      id: '0-1-1'
    },
    {
      id: '0-2'
    },
    {
      id: '1'
    }
  ];
 */
```

## Api

`arrayToTree(list, [options])`

```javascript
arrayToTree(list, {
  idKey,
  pIdKey,
  // ...
})
```



**options**

| name       | description                                                  | type     | accepted values      | default              |
| ---------- | ------------------------------------------------------------ | -------- | -------------------- | -------------------- |
| idKey      | the node's attribute to save node's unique identifier.<br />support chain calls. | string   | —                    | id                   |
| pIdKey     | the node's attribute to save its parent node's unique identifier.<br />support chain calls. | string   | —                    | parentId             |
| isKeyChain | whether to enable the chain call of idKey and pIdKey         | boolean  | —                    | true                 |
| detached   | whether to preserve the node which specifies parent's identifier but the parent node is non-existent.<br />if set true, the node keep as root node.<br />if set false, the node will be abandoned and output error message to console. | boolean  | —                    | true                 |
| sortKey    | the node's attribute to save node's sort value.              | string   | —                    | ''                   |
| order      | specify the sort type.<br />works when `sortKey` is specified. | string   | ascending/descending | ascending            |
| traverse   | traverse all nodes.<br />parent is null when it has no parent. | function | —                    | (node, parent) => {} |

`treeToArray(tree, [options])`

```javascript
treeToArray(tree, {
  childrenKey
})
```



**options**

| name        | description                                                | type   | accepted values | default  |
| ----------- | ---------------------------------------------------------- | ------ | --------------- | -------- |
| childrenKey | specify which node attribute is used as the node's subtree | string | —               | children |

## License

MIT
