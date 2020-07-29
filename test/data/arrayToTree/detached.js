module.exports = {
  list: [
    {
      id: '0'
    },
    {
      id: '0-1',
      parentId: '0'
    },
    {
      id: '1',
      parentId: '-1'
    },
    {
      id: '2'
    }
  ],
  tree: [
    {
      id: '0',
      children: [
        {
          id: '0-1',
          parentId: '0'
        }
      ]
    },
    {
      id: '1',
      parentId: '-1'
    },
    {
      id: '2'
    }
  ]
};
