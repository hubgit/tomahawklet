
/**
 * KCRW Tracklist Scraper
 * Created by: Alf Eaton <alf@hubmed.org>
 * Version: 0.1
 *
 * Example URL: http://newmedia.kcrw.com/tracklists/index.php?channel=Live
 */
Playgrub.source.url = 'http://newmedia.kcrw.com/tracklists/*';
Playgrub.source.error = 'Sorry, no tracks were found.';
Playgrub.source.scrape = function() {
	var track, artist, song;

    $("#table_tracklist").find("tr").each(function() {
        track = $(this);

        artist = track.find(".artist").text();
        song = track.find(".song").text();

        if (artist && song) {
            Playgrub.playlist.add_track(artist, song);
        }
    });
}

Playgrub.source.start();