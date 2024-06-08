$(document).ready(function() {
	// task2
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
	// task3
	$.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
		if (data.status_code == 200) {
			$('#api_status').addClass('available');
		}
		else {
			$('#api_status').removeClass('available');
		}
	});
});
