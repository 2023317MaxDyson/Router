/*  create 3 router in this file (request '/', response 'home page'; 
request '/login', response 'login page'; request '/register', 
response  'register page'; for all other request, 
response 'page not found')*/

const _express = require('express')
const router = _express.Router()


// The Use method gets the request and the response from the page

router.use('/', (req, res, next) => {
         if(req.originalUrl !== '/favicon.ico'){
            console.log('home page')
         res.send('<h1>Home page</h1>')
        }
    next()
    })
    

router.use('/login', (req, res, next) => {
      if(req.originalUrl !== '/favicon.ico'){ 
        console.log('login page')
        res.send('<h1> Login page</h1>')
        }
    
    })

    
router.use('/register', (req, res, next) => {
    if(req.originalUrl !== '/favicon.ico'){ 
      console.log('register page')
      res.send('<h1>Register page</h1>')
      }
  })


  //The Get method gets the response from the page

  router.use(_express.urlencoded({extended: true}))

router.get('/', (req, res, next) => {
       res.send('<h1> Home page</h1>')
 })

 router.get('/login', (req, res, next) => {
    res.send('<h1> Login page</h1>')
})

router.get('/register', (req, res, next) => {
    res.send('<h1>Register page</h1>')
})


module.exports = router


