$(document).ready(function() {
	$('newQuote').on("click", function() {
		$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
			.done(update)
			.fail(handErr);
			var html = "";

			json.forEach(funciton(val)) {
				html += "<div class = 'quote'>";
				html += ""
				html +="</div>";
			}
	});
})