const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

require('dotenv').config();

app.use(cors());

app.get('/', (req, res) => {
    res.send('The server is working.');
});

app.use('/f', express.static('static-assets'));

require('./endpoints/shops')(app);

app.listen(port, () => {
    console.log(`Polyanka backend is listening on port ${ port }`);
});
