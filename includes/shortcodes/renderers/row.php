<?php
/**
 * Row
 *
 * This file is being included into "../class-shortcodes.php" file's shortcode_render() method.
 *
 * @since  1.0
 *
 * @param  string behaviour
 * @param  string bg_attachment
 * @param  string bg_color
 * @param  string bg_image
 * @param  string bg_position
 * @param  string bg_repeat
 * @param  string bg_size
 * @param  string class
 * @param  string font_color
 * @param  string html
 * @param  string id
 * @param  string margin
 * @param  string padding
 * @param  string parallax
 */



//Shortcode attributes
	$defaults = apply_filters( WM_SHORTCODES_HOOK_PREFIX . '_defaults', array(
			'behaviour'     => '',
			'bg_attachment' => '',
			'bg_color'      => '',
			'bg_image'      => '',
			'bg_position'   => '',
			'bg_repeat'     => '',
			'bg_size'       => '',
			'class'         => '',
			'font_color'    => '',
			'html'          => array(
					'default' => '<div class="{class}"{attributes}>{content}</div>',
					'section' => '{content}',
				),
			'id'            => '',
			'margin'        => '',
			'padding'       => '',
			'parallax'      => '',
		), $shortcode );
	$atts = apply_filters( WM_SHORTCODES_HOOK_PREFIX . '_attributes', $atts, $shortcode );
	$atts = shortcode_atts( $defaults, $atts, $prefix_shortcode . $shortcode );

//Validation
	//content
		$atts['content'] = apply_filters( WM_SHORTCODES_HOOK_PREFIX . '_content', $content, $shortcode );
		$atts['content'] = apply_filters( WM_SHORTCODES_HOOK_PREFIX . $shortcode . '_content', $atts['content'] );
	//attributes
		$atts['attributes'] = array( 'spacer' => '', 'style' => '' );
	//behaviour
		$atts['behaviour'] = trim( $atts['behaviour'] );
		if ( ! $atts['behaviour'] || ! isset( $atts['html'][ $atts['behaviour'] ] ) ) {
			$atts['behaviour'] = 'default';
		}
	//bg_color
		$atts['bg_color'] = trim( $atts['bg_color'] );
		if ( $atts['bg_color'] ) {
			$atts['attributes']['style'] .= ' background-color: ' . esc_attr( $atts['bg_color'] ) . ';';
		}
	//bg_image
		$atts['bg_image'] = trim( $atts['bg_image'] );
		if ( is_numeric( $atts['bg_image'] ) ) {
			$image_size = apply_filters( WM_SHORTCODES_HOOK_PREFIX . $shortcode . '_image_size', 'full' );
			$image      = wp_get_attachment_image_src( absint( $atts['bg_image'] ), $image_size );

			if ( is_array( $image ) && isset( $image[0] ) && $image[0] ) {
				$atts['attributes']['style'] .= ' background-image: url(' . esc_url( $image[0] ) . ');';
			}
		} elseif ( $atts['bg_image'] ) {
			$atts['attributes']['style'] .= ' background-image: url(' . esc_url( $atts['bg_image'] ) . ');';
		}
	//parallax
		$atts['parallax'] = trim( str_replace( ' ', '', $atts['parallax'] ) );
		if ( $atts['parallax'] ) {
			$atts['parallax'] = explode( ',', $atts['parallax'] );

			$atts['attributes']['parallax'] = 'data-parallax-inertia="' . esc_attr( floatval( $atts['parallax'][0] ) ) . '"';
			if ( isset( $atts['parallax'][1] ) ) {
				$atts['attributes']['parallax'] .= ' data-parallax-xPosition="' . esc_attr( absint( $atts['parallax'][1] ) ) . '%"';
			}
		}
	//bg_attachment
		$atts['bg_attachment'] = trim( $atts['bg_attachment'] );
		if ( $atts['bg_image'] ) {
			if ( $atts['bg_attachment'] && ! $atts['parallax'] ) {
				$atts['bg_attachment'] = ' background-attachment: ' . esc_attr( $atts['bg_attachment'] ) . ';';
			} else {
				$atts['bg_attachment'] = '';
			}
			$atts['attributes']['style'] .= apply_filters( WM_SHORTCODES_HOOK_PREFIX . $shortcode . '_bg_attachment', $atts['bg_attachment'], $atts );
		}
	//bg_position
		$atts['bg_position'] = trim( $atts['bg_position'] );
		if ( $atts['bg_image'] ) {
			if ( $atts['bg_position'] ) {
				$atts['bg_position'] = ' background-position: ' . esc_attr( $atts['bg_position'] ) . ';';
			} else {
				$atts['bg_position'] = ' background-position: 50% 50%;';
			}
			if ( $atts['parallax'] ) {
				$atts['bg_position'] = '';
			}
			$atts['attributes']['style'] .= apply_filters( WM_SHORTCODES_HOOK_PREFIX . $shortcode . '_bg_position', $atts['bg_position'], $atts );
		}
	//bg_repeat
		$atts['bg_repeat'] = trim( $atts['bg_repeat'] );
		if ( $atts['bg_image'] ) {
			if ( $atts['bg_repeat'] && ! $atts['parallax'] ) {
				$atts['bg_repeat'] = ' background-repeat: ' . esc_attr( $atts['bg_repeat'] ) . ';';
			} else {
				$atts['bg_repeat'] = '';
			}
			$atts['attributes']['style'] .= apply_filters( WM_SHORTCODES_HOOK_PREFIX . $shortcode . '_bg_repeat', $atts['bg_repeat'], $atts );
		}
	//bg_size
		$atts['bg_size'] = trim( $atts['bg_size'] );
		if ( $atts['bg_image'] ) {
			if ( $atts['bg_size'] && ! $atts['parallax'] ) {
				$atts['bg_size'] = ' background-size: ' . esc_attr( $atts['bg_size'] ) . ';';
			} else {
				$atts['bg_size'] = '';
			}
			$atts['attributes']['style'] .= apply_filters( WM_SHORTCODES_HOOK_PREFIX . $shortcode . '_bg_size', $atts['bg_size'], $atts );
		}
	//font_color
		$atts['font_color'] = trim( $atts['font_color'] );
		if ( $atts['font_color'] ) {
			$atts['attributes']['style'] .= ' color: ' . esc_attr( $atts['font_color'] ) . ';';
		}
	//id
		$atts['id'] = trim( $atts['id'] );
		if ( $atts['id'] ) {
			$atts['attributes']['id'] = 'id="' . esc_attr( $atts['id'] ) . '"';
		}
	//margin
		$atts['margin'] = trim( str_replace( ';', '', $atts['margin'] ) );
		if ( $atts['margin'] ) {
			$atts['attributes']['style'] .= ' margin: ' . esc_attr( $atts['margin'] ) . ';';
		}
	//padding
		$atts['padding'] = trim( str_replace( ';', '', $atts['padding'] ) );
		if ( $atts['padding'] ) {
			$atts['attributes']['style'] .= ' padding: ' . esc_attr( $atts['padding'] ) . ';';
		}
	//attributes
		$atts['attributes'] = apply_filters( WM_SHORTCODES_HOOK_PREFIX . $shortcode . '_html_attributes', $atts['attributes'], $atts );
	//style
		if ( isset( $atts['attributes']['style'] ) && $atts['attributes']['style'] ) {
			$atts['attributes']['style'] = 'style="' . esc_attr( trim( $atts['attributes']['style'] ) ) . '"';
		}
	//class
		$atts['class'] = trim( 'wm-row clearfix ' . $shortcode . '-shortcode ' . trim( $atts['class'] ) );
		$atts['class'] = apply_filters( WM_SHORTCODES_HOOK_PREFIX . $shortcode . '_classes', esc_attr( $atts['class'] ) );

//Enqueue scripts
	if ( apply_filters( WM_SHORTCODES_HOOK_PREFIX . $shortcode . '_enqueue_scripts', true ) ) {
		if ( $atts['parallax'] ) {
			wp_enqueue_script( 'wm-jquery-parallax' );
			wp_enqueue_script( 'wm-shortcodes-parallax' );
		}
	}
	do_action( WM_SHORTCODES_HOOK_PREFIX . $shortcode . '_enqueue_scripts' );

//Output
	$replacements = apply_filters( WM_SHORTCODES_HOOK_PREFIX . $shortcode . '_output_replacements', array(
			'{attributes}' => implode( ' ', $atts['attributes'] ),
			'{class}'      => $atts['class'],
			'{content}'    => $atts['content'],
		), $atts );
	$output = strtr( $atts['html'][ $atts['behaviour'] ], $replacements );

?>