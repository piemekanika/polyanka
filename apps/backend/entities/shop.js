const { pool } = require('../db-pool');

module.exports = {
    getShop(id) {
        return pool.query(`select bodyjson from shops where bodyjson->>'id' = ${id}`);
    },
    getShops() {
        return pool.query('select bodyjson from shops order by cast(bodyjson->>\'id\' as int)')
            .then(r => r.rows.map(e => e.bodyjson))
    },
    getTypes() {
        return pool.query(`select distinct bodyjson->>'type' as type from shops`)
            .then(r => r.rows.map(e => e.type));
    },

    getShopByTypes(types) {
        return pool.query(`select bodyjson from shops where bodyjson->>'type' = ${types.toString()}  order by cast(bodyjson->>\'id\' as int)`)
        .then(r => r.rows.map(e => e.bodyjson))
    }
};
