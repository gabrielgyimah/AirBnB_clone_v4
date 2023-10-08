$(document).ready(function () {
	let amenities = {};

	const amenity_checkers = $('li input[type=checkbox]')
	amenity_checkers.on('change', function () {
		if (this.checked) {
			amenities[$(this).attr("data-name")] = $(this).attr("data-id");
		} else {
			delete amenities[$(this).attr("data-name")];
		}
		$(".amenities h4").text(Object.keys(amenities).sort().join(", "));
	})
})
