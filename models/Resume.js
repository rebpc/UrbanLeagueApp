var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resumeSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId },
  work: [{
    name: { type: String, default: '' },
    position: { type: String, default: '' },
    tasks: { type: String, default: '' },
    timePeriod: { type: String, default: '' }
  }],
  skills: { type: String, default: '' },
  education: [{
    institution: { type: String, default: '' },
    graduationYear: { type: String, default: '' },
    degree: { type: String, default: '' }
  }]
});

module.exports = mongoose.model('Resume', resumeSchema);
