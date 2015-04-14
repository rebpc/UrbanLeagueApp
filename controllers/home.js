/**
 * GET /
 * Home page.


 */
exports.index = function(req, res) {
  if(req.user) { 
    res.render('home', {
      title: 'Home'
    });
  }
  else {
    res.render('homeNotLoggedIn', {
        title: 'Home Not Logged In'
    });
  }
};
