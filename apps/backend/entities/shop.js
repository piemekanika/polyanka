const { faker } = require('@faker-js/faker');

module.exports = {
    getShop(id) {
        const shop = {
            name: faker.company.name(),
            description: faker.lorem.words(3),
            rate: faker.random.numeric(),
            photos: [
                {
                    url: `https://api.lorem.space/image/shoes?w=140&h=140&id=${faker.random.numeric()}`
                },
                {
                    url: `https://api.lorem.space/image/shoes?w=140&h=140&id=${faker.random.numeric()}`
                },
                {
                    url: `https://api.lorem.space/image/shoes?w=140&h=140&id=${faker.random.numeric()}`
                },
            ],
            badges: [
                {
                    label: faker.word.adverb(),
                    color: 'green',
                },
                {
                    label: faker.word.adverb(),
                    color: 'red',
                }
            ],
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
