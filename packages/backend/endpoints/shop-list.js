const ShopEntity = require('../entities/shop');

module.exports = function (app) {
    app.get('/shop-list', (req, res) => {
        res.send(ShopEntity.getShops());
    });
};
