
/*
 * GET home page.
 */

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
	console.log(req.body)
	res.render('index', {
    title: 'res',
    bin: req.body.bin
  });
}