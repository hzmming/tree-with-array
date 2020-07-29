module.exports = {
  list: [
    {
      name: '0',
      prop: {
        id: '0'
      }
    },
    {
      name: '0-1',
      prop: {
        id: '0-1',
        parentId: '0'
      }
    },
    {
      name: '0-1-1',
      prop: {
        id: '0-1-1',
        parentId: '0-1'
      }
    },
    {
      name: '0-2',
      prop: {
        id: '0-2',
        parentId: '0'
      }
    },
    {
      name: '1',
      prop: {
        id: '1'
      }
    }
  ],
  tree: [
    {
      name: '0',
      prop: {
        id: '0'
      },
      children: [
        {
          name: '0-1',
          prop: {
            id: '0-1',
            parentId: '0'
          },
          children: [
            {
              name: '0-1-1',
              prop: {
                id: '0-1-1',
                parentId: '0-1'
              }
            }
          ]
        },
        {
          name: '0-2',
          prop: {
            id: '0-2',
            parentId: '0'
          }
        }
      ]
    },
    {
      name: '1',
      prop: {
        id: '1'
      }
    }
  ]
};
