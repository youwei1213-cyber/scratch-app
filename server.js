const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'www')));
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => { console.log('🎰 Scratch App running on port ' + PORT); });