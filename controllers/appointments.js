var moment = require('moment');
var _ = require('lodash');

var mockTimes = [
	{start: 1318781876, end: 1428789968},
	{start: 1318782876, end: 1428800143},
	{start: 1428789143, end: 1428800143}
];

function formatTimes(ranges) {
	return _.map(ranges, function(range) {
		var start = moment.unix(range.start);
		var end = moment.unix(range.end);
		return {
			text: start.format('dddd[,] MM/DD/YYYY h[:]mma [-] ') + end.format('h[:]mma'),
			time: [range.start, range.end]
		};
	});
}

exports.schedule = function(req, res) {
	var availableTimes = formatTimes(mockTimes);
	res.render('appointments/schedule', { availableTimes: availableTimes });
};

exports.yourAppointments = function(req, res) {
	var scheduledFor = [{start: 1318781876, end: 1428789968},
	{start: 1318782876, end: 1428800143},
	{start: 1428789143, end: 1428800143}];
	var next = [{start: 1318781876, end: 1428789968},
	{start: 1318782876, end: 1428800143},
	{start: 1428789143, end: 1428800143}];
	var prev = [{start: 318781876, end: 428789968}];

	res.render('appointments/your-appointments',
		{ futureTimes: formatTimes(next), pastTimes: formatTimes(prev) });
};

exports.index= function(req, res) {
  res.render('appointments/index', {});
};
