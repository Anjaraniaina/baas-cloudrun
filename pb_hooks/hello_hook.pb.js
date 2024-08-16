routerAdd('GET', '/hello/:name', (c) => {
    const name = c.pathParam('name')
    console.log("Endpoint was hit" + name)
  
    return c.json(200, {
      name,
    })
  }, false)