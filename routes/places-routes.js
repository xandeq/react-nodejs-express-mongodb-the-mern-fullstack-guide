const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous skyscrappers in the world',
        location: {
            lat: 40.7484445,
            lng: -73.9878531
        },
        address: '20 W 34th St, New York, NY 10001, Estados Unidos',
        creator: 'u1'
    }
]

// Obter places pelo iD do place
router.get('/place/:pid', (req,res,next) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    })
    res.json({place});
});

// Obter places pelo iD do usuario
router.get('/user/:uid', (req,res,next) => {
    const userId = req.params.uid;

    const place = DUMMY_PLACES.find(p => {
        return p.creator === userId;
    })
    res.json({place});
})

// COm isso podemos usar no app.js
module.exports = router;