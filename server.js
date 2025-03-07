const express = require('express');
const app = express();

app.use(express.static('./dist/mypwa'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/<name-on-package.json>/'}
    );
  });
app.listen(process.env.PORT || 8080);