
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.bin = function(req, res){
  console.log(res)
  res.render('index', {
    title: 'res',
    bin: '{sample: 18}'
  });
};