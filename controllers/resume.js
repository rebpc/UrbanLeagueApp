var _ = require('lodash');
var Resume = require('../models/Resume');

exports.getResume = function(req, res) {
  Resume.findOne({user: req.user.id}, function(err, resume) {
    res.render('resume', {
      title: 'Resume',
      resume: resume
    });
  });
};

exports.postUpdateResume = function(req, res) {
  Resume.findOne({user: req.user.id}, function(err, resume) {
    if (err) return next(err);
    if (resume) {
      _.extend(resume, req.body);
    } else {
      var data = _.extend({user: req.user.id}, req.body);
      console.log(data);
      resume = new Resume(data);
    }

    resume.save(function(err) {
      if (err) return next(err);
      req.flash('success', { msg: 'Resume information updated.' });
      res.redirect('/resume');
    });
  });
};
