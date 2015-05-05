
/*
 * GET home page.
 */
var mongo = require('mongoskin');
var mongo = require('mongoskin');
var path = process.env.MONGOLAB_URI;
var db = mongo.db(path, {native_parser:true});

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

// get /:id.html
exports.binHtml = function(req, res){
  var key = parseInt(req.params.id, 10)
  db.collection('bins').findOne({key: key}, function(err, result){
    if (err) throw err;
    var bin;
    if (result === null) {
      bin = '';
    } else {
      bin = result.bin;
    }

    res.render('index', {
      title: 'res',
      bin: bin
    });
  })
  
};

// get /:id
exports.bin = function(req, res){
  var key = parseInt(req.params.id, 10)
  db.collection('bins').findOne({key: key}, function(err, result){
    if (err) throw err;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.type('json');
    if (result === null) {
      res.status(404).send('Not found')
    } else {
      res.send(result.bin);
    }
  })
};

// post /
exports.createBin = function(req, res){
  db.collection('lastIndex').findOne(function(err, result){
    var oldKey = result.key;
    var newKey = oldKey + 1;
    db.collection('lastIndex').update({key: oldKey}, {key: newKey}, function(err){
      db.collection('bins').insert({key: newKey, bin: req.body.bin}, function(err){
        res.redirect('/'+newKey+'.html')
      });
    })
  })   
}