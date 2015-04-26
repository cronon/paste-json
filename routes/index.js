
/*
 * GET home page.
 */
var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/paste-json", {native_parser:true});

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

// get /:id.html
exports.binHtml = function(req, res){
  res.render('index', {
    title: 'res',
    bin: req.params.id
  });
};

// get /:id
exports.bin = function(req, res){
  res.send(req.params.id)
};

// post /
exports.createBin = function(req, res){
    db.collection('lastIndex').findOne(function(err, result){
      var oldKey = result.key;
      var newKey = oldKey + 1;
      db.collection('lastIndex').update({key: oldKey}, {key: newKey}, function(err){
        res.render('index', {
          title: 'res',
          bin: newKey
        });   
      })
    })   
}