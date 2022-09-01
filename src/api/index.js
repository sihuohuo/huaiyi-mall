let req = require.context('@/api',true,/\.js$/)
req.keys().forEach((path) => {
//   const content = req(path).default || req(path)
//   console.log('content', content.name)
})  