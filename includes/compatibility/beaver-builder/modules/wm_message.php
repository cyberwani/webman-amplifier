<?php if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Message
 *
 * @package     WebMan Amplifier
 * @subpackage  Compatibility
 * @copyright   WebMan Design, Oliver Juhas
 *
 * @since    1.1.0
 * @version  1.6.0
 */
class WM_Amplifier_Beaver_Builder_Module_Message extends WM_Amplifier_Beaver_Builder_Register_Module {





	/**
	 * Constructor
	 *
	 * @since    1.1.0
	 * @version  1.6.0
	 */
	public function __construct() {

		// Processing

			parent::__construct();

	} // /__construct





} // /WM_Amplifier_Beaver_Builder_Module_Message

WM_Amplifier_Beaver_Builder_Module_Message::register( __FILE__ );