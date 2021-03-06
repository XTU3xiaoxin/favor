var logger = require('../commons/logging').logger;
var Thing = require('../models/Thing').model;
var ThingService = require('../services/ThingService');

module.exports = function(app) {
    var mode = app.get('env') || 'development';
    var asseton = require('../middlewares/asseton')(mode);

    var indexPage = function(req, res, next) {
        asseton(req, res);
        var input = {};
        res.render('index', input);
    };
    app.get('/',      indexPage);
    app.get('/find',  indexPage);
    app.get('/share', indexPage);
    app.get('/forum', indexPage);
    app.get('/about', indexPage);
    app.get('/user', indexPage);
    app.get('/things-:sort', function(req, res, next) {
        res.format({
            'text/html': indexPage,
            'application/json': getThingsData
        });
    });

    var getThingsData = function(req, res, next){
//        var sort = req.query.sort || 'auto';
        var sort = req.params.sort || 'auto';

        if(sort=='auto'){
            Deal.find().sort({'meta.views': -1, 'meta.likes': -1, 'meta.owns': -1, 'meta.deals': -1}).exec(function(err, docs) {
                if (err) {
                    logger.error(err);
                    res.json(500, err);
                    return;
                }
                res.json(200, docs);
            })
        }
        else if(sort=='new'){
            Deal.find().sort({'updOn': -1}).limit(5).exec(function(err, docs) {
                if (err) {
                    logger.error(err);
                    res.json(500, err);
                    return;
                }
                res.json(200, docs);
            })
        }
        else if(sort=='hot'){
            Deal.find().sort({'meta.views': -1}).limit(5).exec(function(err, docs) {
                if (err) {
                    logger.error(err);
                    res.json(500, err);
                    return;
                }
                res.json(200, docs);
            })
        }
        else{
            res.json(200, []);
        }
    };
    app.get('/things', getThingsData);

    app.post('/deal', function(req, res) {
        var postInfo = JSON.parse(JSON.stringify(req.body));
        logger.debug(postInfo);
        ThingService.create(postInfo, function(err, deal, numberAffected) {
            if (err) {
                logger.error(err);
                res.json(500, err);
                return;
            }
            logger.debug('Created deal: ' + deal.id);
            logger.debug(deal);
            res.json(200, deal);
        });
    });

    app.get('/deal/:id', function(req, res) {
        Thing.findOne({'_id': req.params.id}, function(err, foundDeal) {
            if (err) {
                logger.error(err);
                res.json(500, err);
                return;
            }
            logger.debug('Found deal: ' + foundDeal.id);
            logger.debug(foundDeal);
            res.json(200, foundDeal);
        });
    });

    app.put('/deal/:id', function(req, res) {
        var postInfo = JSON.parse(JSON.stringify(req.body));
        var thingId = req.params.id;
        var user = req.user;
        ThingService.update(postInfo, user, thingId, function(err, thing) {
            if (err) {
                logger.error(err);
                res.json(500, err);
            } else {
                logger.debug(user);
                if (user.id == thing.crtBy) {
                    thing.editable = true;
                } else {
                    thing.editable = false;
                }
                var liked = JSON.parse(user.liked);
                if (thingId in liked) {
                    thing.liked = true;
                } else {
                    thing.liked = false;
                }
                var owned = JSON.parse(user.owned);
                if (thingId in owned) {
                    thing.owned = true;
                } else {
                    thing.owned = false;
                }
                logger.debug('Updated thing: ' + thing.id);
                logger.debug(thing);
                res.json(200, [thing, {'liked': thing.liked, 'owned': thing.owned, 'editable': thing.editable}]);
            }
        });
    });

    app.delete('/deal/:id', function(req, res) {
        Thing.remove({'_id': req.params.id}, function(err) {
            if (err) {
                logger.error(err);
                res.json(500, err);
                return;
            }
            logger.debug('Deleted deal: ' + req.params.id);
            res.json(200, {'_id': req.params.id});
        })
    });

    app.get('/recommendDeals', function(req, res) {
        Thing.find().sort({'meta.views': -1, 'meta.likes': -1, 'meta.owns': -1, 'meta.deals': -1}).exec(function(err, docs) {
            if (err) {
                logger.error(err);
                res.json(500, err);
                return;
            }
            res.json(200, docs);
        })
    });

    app.get('/newestDeals', function(req, res) {
        Thing.find().sort({'updOn': -1}).limit(5).exec(function(err, docs) {
            if (err) {
                logger.error(err);
                res.json(500, err);
                return;
            }
            res.json(200, docs);
        })
    });

    app.get('/hottestDeals', function(req, res) {
        Thing.find().sort({'meta.views': -1}).limit(5).exec(function(err, docs) {
            if (err) {
                logger.error(err);
                res.json(500, err);
                return;
            }
            res.json(200, docs);
        })
    });

    app.get('/upaireturn', function(req, res) {
        var uploadResult = {
            code: req.param('code'),
            message: req.param('message'),
            url: req.param('url'),
            time: req.param('time'),
            sign: req.param('sign')
        };
        if (req.param('code') != '200') {
            console.error(uploadResult);
        } else {
            console.debug(uploadResult);
        }
        res.json(uploadResult);
    });

};