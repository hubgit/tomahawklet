/**
 * This is My Jam Tomahawklet Scraper
 * Created by: J Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 */
Playgrub.source.url = 'thisismyjam.com';
Playgrub.source.error = 'Check your This is My Jam page - only playlist pages are supported.'
Playgrub.source.scrape = function() {
	$(".post h4").each(function() {
		var track = $(this);

		var artist = track.find(".artistName").text().replace("by ","").trim()
		var title = track[0].childNodes[0].nodeValue.trim();

		if (artist && title) {
			Playgrub.playlist.add_track(artist, title);
		}
    });
}

Playgrub.source.start();
