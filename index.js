const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('AWS App runner nodejs running...');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Test service running successfully')
})