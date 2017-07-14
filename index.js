var express = require('express');
var path = require('path');
var multer  = require('multer');
var upload = multer({});

// Set up express
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'));

// Render index page
app.get('/', (req,res) => {
  res.render('index');
});

app.post('/size', upload.single('file'), (req, res) => {
  if (req.file) {
    var file = req.file;
    res.json({
      "size": file.size
    });
  } else {
    res.render('index');
  }
});

app.listen(app.get('port'), () => {
    console.log('Server is running on port', app.get('port'));
});
