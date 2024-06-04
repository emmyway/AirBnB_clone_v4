$(document).ready(function() {
	let selectedAmenities = {};

	$('input[type="checkbox"]').change(function() {
		const amenityId = $(this).data('id');
		const amenityName = $(this).data('name');

		if (this.checked) {
			selectedAmenities[aenityId] = amenityName;
		} else {
			delete selectedAmenities[amenityId]
		}

		const amenityList = Object.values(selectedAmenities).joint(', ');
		$('.amenities h4').text(amenityList);
	});
});
