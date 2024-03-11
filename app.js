
/* Create a server  */

const _express = require('express')

const expressApp = _express( )

const _allRoutes = require('./route')

expressApp.use(_express.urlencoded({extended: false}))

expressApp.use(_express.json())

expressApp.use(_allRoutes)

  
// If the page is not found 
expressApp.use((req, res, next) => {
    res.send('<h1>Page not found</h1>');
});


expressApp.listen(2222, ()=>{
console.log('server is running.........')
})

