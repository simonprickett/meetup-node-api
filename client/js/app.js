'use strict';

var app = {
	loadGroups: function() {
		console.log('hello');
		$.ajax({
			url: 'http://localhost:8080/groups',
			success: function(data, status, xhr) {
				var groupsHtml = '<ul>',
				    n;

				console.log(data);

				if (data) {
					for (n = 0; n < data.length; n++) {
						groupsHtml += '<li><a href="#getGroupEvents" data-groupid="' + data[n].id + '">' + data[n].name + '</a></li>';
					}
				}

				groupsHtml += '</ul>';

				$('#content').html(groupsHtml);
				$('a[href="#getGroupEvents').click(function(e) {
					e.preventDefault();
					
					// Work out which group we clicked
					var groupId = $(this).data('groupid');

					// Go get the group's events...
					$.ajax({
						url: 'http://localhost:8080/events/' + groupId,
						success: function(data, status, xhr) {
							var eventsHtml = '<h3>Events</h3><ol>',
								n = 0,
								thisEvent,
								eventDate;

							for (n = 0; n < data.length; n++) {
								thisEvent = data[n];
								eventDate = new Date(thisEvent.time);
								eventsHtml += '<li>' + eventDate.toString() + ' ' + thisEvent.name + " at " + thisEvent.venue.name + '</li>';
							}

							eventsHtml + '</ol>';
							$('#content').html(eventsHtml);
						}
					})
				});
			}
		});
	}
};

$(document).ready(function() {
	app.loadGroups();
});