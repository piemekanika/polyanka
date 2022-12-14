const ShopEntity = require('../entities/shop');

module.exports = function (app) {

    app.get('/shops', async (req, res) => {

        const shops = await ShopEntity.getShops()

        res.send({ shops });
    });
};
