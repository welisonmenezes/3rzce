$(document).ready(function(){

	function toggleCompIndFields() {
		$('.sct-register .wm-custom-radio input').on('change', function() {
			var t = $(this);
			if (t.val() === 'business') {
				$('.sct-register .field-ind').hide();
				$('.sct-register .field-comp').show();
			} else {
				$('.sct-register .field-comp').hide();
				$('.sct-register .field-ind').show();
			}
		});
	}
	toggleCompIndFields();

});