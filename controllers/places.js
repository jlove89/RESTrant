const res = require('express/lib/response')
const router = require('express').Router()
const places = require('../models/places')

// Route 1
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai.jpg', 
}, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-cat.jpg',
}]
        res.render('places/index.jsx', { places })
})
// Route 2
router.post('/', (req, res) => {
    if (!req.body.pic) {
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })

  //New Places (route 3)
  router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
  //Route 4
  router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      res.render('places/show', { place: places[id], id })
    }
  })
  
  // Route 5
  router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
  
        // Save new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
  })
  
    // Route 6
    router.get("/:id/edit", (req, res) => {
      let id = Number(req.params.id);
      if (isNaN(id)) {
        res.render("error404");
      } else if (!places[id]) {
        res.render("error404");
      } else {
        res.render("places/edit", { place: places[id], id });
      }
    });

  // Route 7
  router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      places.splice(id, 1)
      res.redirect('/places')
    }
  })

module.exports = router