<?php
/**
 * Plugin Name: WBD Pricing Tables
 * Description: A beautiful pricing table block with multiple plans and feature lists.
 * Version: 1.1.2
 * Requires at least: 6.5
 * Requires PHP: 7.4
 * Author: WPBrand Digital
 * Author URI: https://wpbranddigital.org
 * License: GPLv2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: wbd-pricing-tables
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
if ( ! function_exists( 'wbd_pricing_table_block_init' ) ) {
	add_action( 'init', 'wbd_pricing_table_block_init' );
	function wbd_pricing_table_block_init() {
		register_block_type( __DIR__ . '/build/' );
	}
}