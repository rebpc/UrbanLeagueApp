/**
 * GET /
 * Home page.


 */
exports.index = function(req, res) {
  if(req.user) { 
    res.render('home', {
      title: 'Home',
      firstName: req.user.firstName,
    });
  }
  else {
    res.render('homeNotLoggedIn', {
        title: 'Home Not Logged In',
    });
  }
};
