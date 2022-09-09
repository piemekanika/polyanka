const ShopEntity = require('../entities/shop');

module.exports = function (app) {
    app.get('/shops', (req, res) => {
        res.send(ShopEntity.getShops());
    });
};
