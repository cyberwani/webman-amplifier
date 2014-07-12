/**
 * WebMan Accordion shortcode scripts
 *
 * @package     WebMan Amplifier
 * @subpackage  Shortcodes
 *
 * @since       1.0
 * @version     1.0.9.4
 */



jQuery( function() {



	/**
	 * Tabs
	 */

		var $tabs = jQuery( '.wm-tabs' );

		$tabs.find( '.wm-item' ).hide();

		$tabs.each( function() {
				var $this         = jQuery( this ),
				    countingItems = $this.find( '.wm-item' ).length,
				    activeItem    = ( 0 < $this.data( 'active' ) ) ? ( $this.data( 'active' ) ) : ( 1 );

				$this.find( '.wm-item' ).eq( activeItem - 1 ).toggleClass( 'active' ).show();
				$this.find( '.wm-tab-links li' ).eq( activeItem - 1 ).addClass( 'active' );
			} );

		$tabs.on( 'click', '.wm-tab-links a', function( e ) {
				e.preventDefault();

				var $this = jQuery( this );

				$this.parent().addClass( 'active' ).siblings().removeClass( 'active' );
				jQuery( $this.data( 'tab' ) ).show().addClass( 'active' ).siblings( '.wm-item' ).removeClass( 'active' ).hide();
			} );



	/**
	 * Tour tabs
	 */

		var $tourTabs = jQuery( '.wm-tabs.tour-tabs' );

		jQuery( '<div class="wm-tour-nav top"><span class="prev"></span><span class="next"></span></div>' ).prependTo( '.wm-tabs.tour-tabs .wm-tabs-items' );
		jQuery( '<div class="wm-tour-nav bottom"><span class="prev"></span><span class="next"></span></div>' ).appendTo( '.wm-tabs.tour-tabs .wm-tabs-items' );

		$tourTabs.each( function() {
				var $this    = jQuery( this ),
				    prevStep = $this.find( '.wm-tab-links li.active' ).prev( 'li' ).html(),
				    nextStep = $this.find( '.wm-tab-links li.active' ).next( 'li' ).html();

				if ( 'undefined' != typeof prevStep && prevStep.length ) {
					$this.find( '.wm-tour-nav .prev' ).html( prevStep );
				}

				if ( 'undefined' != typeof nextStep && nextStep.length ) {
					$this.find( '.wm-tour-nav .next' ).html( nextStep );
				}
			} );

		//Change when tab clicked
			$tourTabs.on( 'click', '.wm-tab-links a', function() {
				var $this       = jQuery( this ),
				    $parentWrap = $this.closest( '.wm-tabs' ),
				    prevTourTab = $this.parent().prev( 'li' ),
				    nextTourTab = $this.parent().next( 'li' );

				if ( prevTourTab.length ) {
					$parentWrap.find( '.wm-tour-nav .prev' ).html( prevTourTab.html() );
				} else {
					$parentWrap.find( '.wm-tour-nav .prev' ).html( '' );
				}

				if ( nextTourTab.length ) {
					$parentWrap.find( '.wm-tour-nav .next' ).html( nextTourTab.html() );
				} else {
					$parentWrap.find( '.wm-tour-nav .next' ).html( '' );
				}
			} );

		//Change when tour nav clicked
			jQuery( '.wm-tour-nav' ).on( 'click', 'a', function( e ) {
				e.preventDefault();

				var $this       = jQuery( this ),
				    $parentWrap = $this.closest( '.wm-tabs' ),
				    targetID    = $this.data( 'tab' ),
				    prevTourTab = $parentWrap.find( '.wm-tab-items-' + targetID.substring( 1 ) ).prev( 'li' ),
				    nextTourTab = $parentWrap.find( '.wm-tab-items-' + targetID.substring( 1 ) ).next( 'li' );

				jQuery( '.wm-tab-items-' + targetID.substring( 1 ) ).addClass( 'active' ).siblings( 'li' ).removeClass( 'active' );
				jQuery( targetID ).show().addClass( 'active' ).siblings( '.wm-item' ).removeClass( 'active' ).hide();

				if ( prevTourTab.length ) {
					$parentWrap.find( '.wm-tour-nav .prev' ).html( prevTourTab.html() );
				} else {
					$parentWrap.find( '.wm-tour-nav .prev' ).html( '' );
				}

				if ( nextTourTab.length ) {
					$parentWrap.find( '.wm-tour-nav .next' ).html( nextTourTab.html() );
				} else {
					$parentWrap.find( '.wm-tour-nav .next' ).html( '' );
				}
			} );



} );