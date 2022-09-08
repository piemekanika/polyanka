const { faker } = require('@faker-js/faker');

module.exports = {
    getShop(id) {
        const shop = {
            name: faker.company.name(),
            description: faker.lorem.words(3),
            rate: faker.random.numeric(),
            id,
        };

        return shop;
    },
    getShops() {
        const mockCount = faker.random.numeric(1);

        const shops = [];

        for (let i = 0; i < mockCount; i++) {
            shops.push(this.getShop(i));
        }

        return { shops };
    },
};
