const router = require('express').Router();

router.use('/posts', require('./posts'));

router.use((err, req, res, next) => {
    if (err.name === 'ValidationError') return res.status(422).json({
        errors: Object.keys(err.errors).reduce((error, key) => {
            errors[key] = err.errors[key].message;
            return errors;
        })
    });

    return next(err);
});

module.exports = router;
