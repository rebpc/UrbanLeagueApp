var moment = require('moment');
var _ = require('lodash');

var mockTimes = [
	{start: 1318781876, end: 1428789968},
	{start: 1318782876, end: 1428800143},
	{start: 1428789143, end: 1428800143}
];

exports.schedule = function(req, res) {
	var availableTimes = _.map(mockTimes, function(range) {
		var start = moment.unix(range.start);
		var end = moment.unix(range.end);
		return {
			text: start.format('dddd[,] MM/DD/YYYY h[:]mma [-] ') + end.format('h[:]mma'),
			time: [range.start, range.end]
		};
	});
	res.render('appointments/schedule', { availableTimes: availableTimes });
};
