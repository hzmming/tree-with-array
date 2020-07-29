module.exports = {
  list: [
    {
      ID: '0'
    },
    {
      ID: '0-1',
      pId: '0'
    },
    {
      ID: '0-1-1',
      pId: '0-1'
    },
    {
      ID: '0-2',
      pId: '0'
    },
    {
      ID: '1'
    }
  ],
  tree: [
    {
      ID: '0',
      children: [
        {
          ID: '0-1',
          pId: '0',
          children: [
            {
              ID: '0-1-1',
              pId: '0-1'
            }
          ]
        },
        {
          ID: '0-2',
          pId: '0'
        }
      ]
    },
    {
      ID: '1'
    }
  ]
};
