
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.bin = function(req, res){
  res.render('index', {
    title: 'res',
    bin: req.params.id
  });
};