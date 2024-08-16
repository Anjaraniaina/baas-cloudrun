routerAdd('GET', '/hello/:name', (c) => {
    const name = c.pathParam('name')
  
    return c.json(200, {
      name,
    })
  })