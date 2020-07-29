module.exports = {
  list: [
    {
      id: '0',
      sort: 0
    },
    {
      id: '0-1',
      sort: 0,
      parentId: '0'
    },
    {
      id: '0-1-1',
      sort: 0,
      parentId: '0-1'
    },
    {
      id: '0-2',
      sort: 1,
      parentId: '0'
    },
    {
      id: '1',
      sort: 1
    }
  ],
  tree: [
    {
      id: '1',
      sort: 1
    },
    {
      id: '0',
      sort: 0,
      children: [
        {
          id: '0-2',
          sort: 1,
          parentId: '0'
        },
        {
          id: '0-1',
          sort: 0,
          parentId: '0',
          children: [
            {
              id: '0-1-1',
              sort: 0,
              parentId: '0-1'
            }
          ]
        }
      ]
    }
  ]
};
