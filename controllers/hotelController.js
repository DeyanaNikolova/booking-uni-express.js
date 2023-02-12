const hotelController = require('express').Router();

hotelController.get('/:id/details', async (req, res) => {
    res.render('details', {
        title: 'Hotel Details'
    });
});

hotelController.get('/create', async (req, res) => {
    res.render('create', {
        title: 'Create Hotel'
    });
});


hotelController.get('/:id/edit', async (req, res) => {
    res.render('edit', {
        title: 'Edit Hotel'
    });
});



module.exports = hotelController;