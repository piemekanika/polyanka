const { pool } = require('../db-pool');

module.exports = {
    getShop(id) {
        return pool.query(`select bodyjson from shops where bodyjson->>'id' = ${id}`);
    },
    getShops() {
        return pool.query('select bodyjson from shops')
            .then(r => r.rows.map(e => e.bodyjson))
    },
};
