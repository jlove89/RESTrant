const res = require('express/lib/response')

const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
  })

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/h-thai-ml-tables.png', 
}, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-cat.jpg',
}]
        res.render('places/index.jsx', { places })
})

router.post('/', (req, res) => {
    res.send('POST /places')
})

module.exports = router