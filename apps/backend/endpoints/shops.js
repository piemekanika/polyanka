const ShopEntity = require('../entities/shop');

module.exports = function (app) {

    app.get('/shops', async (req, res) => {
        if (req.query.types) {
            var shops = await ShopEntity.getShopByTypes(req.query.types)
        } else {
            var shops = await ShopEntity.getShops()
        }

        res.send({ shops });
    });

    app.get('/types', async (req, res) => {

        const types = await ShopEntity.getTypes()

        res.send({ types });
    });
};
