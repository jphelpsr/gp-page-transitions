<script>
// Form 8: advance to the next page when an image choice in field 61 is selected.
jQuery( document ).on( 'change', '#input_8_61 input[type="radio"], #input_8_61 input[type="checkbox"]', function() {
	if ( ! this.checked ) {
		return;
	}
	var $page = jQuery( this ).closest( '.gform_page' );
	setTimeout( function() {
		$page.find( '.gform_next_button' ).trigger( 'click' );
	}, 300 );
} );
</script>
