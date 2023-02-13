const profileController = require('express').Router();
const{ hasUser } = require('../middlewares/guards');

profileController.get('/', hasUser(), (req, res) => {
    res.render('profile', {
        title: 'Profile Page',
        user: req.user
    });
});

module.exports = profileController;