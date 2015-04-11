exports.getResume = function(req, res) {
  res.render('resume', {
    title: 'Resume'
  });
};